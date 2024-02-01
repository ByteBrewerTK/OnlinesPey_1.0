import React, { useState, useEffect } from "react";
import Aadhar from "../../assets/aadharDig.png";
import CryptoJS from "crypto-js";

export default function Dashboard() {
	const [aeps, setAeps] = useState(null);
	const [userCode, setUserCode] = useState("");

	useEffect(() => {
		// Load the AePS library when the component mounts
		const script = document.createElement("script");
		script.src =
			"/node_modules/@ekoindia/aeps-gateway-lib/build/aeps-gateway-lib.js";
		script.onload = () => setAeps(new EkoAEPSGateway());
		document.head.appendChild(script);

		return () => {
			// Cleanup function to remove the script when the component unmounts
			document.head.removeChild(script);
		};
	}, []);

	useEffect(() => {
		let secret_key = "";
		let secret_key_timestamp = "";

		// Define a helper function to export the crypto key
		const exportCryptoKey = async (key) => {
			return new Promise((resolve, reject) => {
				crypto.subtle.exportKey("raw", key).then(resolve).catch(reject);
			});
		};

		const initializeAePS = async () => {
			const key = "d2fe1d99-6298-4af2-8cc5-d97dcf46df30";
			const encodedKey = btoa(key);
			console.log(encodedKey);

			const date = new Date();
			secret_key_timestamp = date.getTime().toString();
			console.log(secret_key_timestamp);

			const textEncoder = new TextEncoder();
			const encodedKeyArray = textEncoder.encode(encodedKey);

			try {
				// Import key with extractable set to true
				const secretKeyArray = await crypto.subtle.importKey(
					"raw",
					encodedKeyArray,
					{
						name: "HMAC",
						hash: { name: "SHA-256" },
						extractable: true,
					},
					false,
					["sign"]
				);

				// Convert the Web Crypto API key to a CryptoJS-compatible format
				const secretKeyBytes = await exportCryptoKey(secretKeyArray);
				const secretKeyCryptoJS =
					CryptoJS.lib.WordArray.create(secretKeyBytes);

				const encodedTimestamp =
					textEncoder.encode(secret_key_timestamp);
				const hmac = CryptoJS.HmacSHA256(
					encodedTimestamp,
					secretKeyCryptoJS
				);
				const signature = CryptoJS.enc.Base64.stringify(hmac);

				secret_key = btoa(
					String.fromCharCode.apply(null, new Uint8Array(signature))
				);

				console.log("Signature:", signature);
				console.log("Secret Key:", secret_key);
			} catch (error) {
				console.error("Error importing key:", error);
			}
		};

		initializeAePS();

		if (aeps && secret_key) {
			// Configure AePS Gateway here only if aeps is available and keys are generated
			aeps.config({
				partner_name: "OnlinesPey",
				initiator_logo_url: "https://your-website.com/your-logo.png",
				initiator_id: "9962981729",
				developer_key: "becbbce45f79c6f5109f848acd540567",
				secret_key: secret_key,
				secret_key_timestamp: secret_key_timestamp,
				user_code: "20810200",
				language: "en",
				environment: "uat",
			});

			console.log("inside aeps");
			aeps.setCallbackURL("https://your-website.com/eko_aeps_callback");
		}
	}, [aeps, userCode]);

	const handleLaunchAePS = () => {
		if (aeps) {
			aeps.open();
		}
	};

	return (
		<main className="grid w-screen h-screen pt-16 bg-white place-items-center">
			<button
				className="w-[200px] h-[200px] border text-black grid place-items-center font-bold rounded-md bg-gray-100 border-gray-200 p-2"
				onClick={handleLaunchAePS}
			>
				<img src={Aadhar} alt="" />
			</button>
		</main>
	);
}
