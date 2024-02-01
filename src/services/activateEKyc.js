import crypto from "crypto";

const HMAC_SHA256 = "HmacSHA256";

const activateEKyc = async () => {
	try {
		let secret_key = "";
		let secret_key_timestamp = "";
		let request_hash = "";

		// Initializing key
		const key = "d2fe1d99-6298-4af2-8cc5-d97dcf46df30"; // uat auth key
		const encodedKey = btoa(key);

		// Get secret_key_timestamp: current timestamp in milliseconds since UNIX epoch as STRING
		// Check out https://currentmillis.com to understand the timestamp format
		const date = new Date();
		secret_key_timestamp = date.getTime().toString();

		// Converts a string to a Uint8Array
		const textEncoder = new TextEncoder();
		const encodedKeyArray = textEncoder.encode(encodedKey);
		const secretKeyArray = await crypto.subtle.importKey(
			"raw",
			encodedKeyArray,
			{ name: HMAC_SHA256 },
			false,
			["sign"]
		);

		// Encodes timestamp and computes the signature
		const encodedTimestamp = textEncoder.encode(secret_key_timestamp);
		const signature = await crypto.subtle.sign(
			HMAC_SHA256,
			secretKeyArray,
			encodedTimestamp
		);

		// Encodes the signature using base64 to get secret-key
		secret_key = btoa(
			String.fromCharCode.apply(null, new Uint8Array(signature))
		);

		const utility_acc_no = "766851234";
		const amount = "100";
		const user_code = "32221002";
		const concatenatedString =
			secret_key_timestamp + utility_acc_no + amount + user_code;

		// Encodes the concatenated string using base64 to get request_hash
		const hashBuffer = await crypto.subtle.digest(
			HMAC_SHA256,
			textEncoder.encode(concatenatedString)
		);
		request_hash = btoa(
			String.fromCharCode.apply(null, new Uint8Array(hashBuffer))
		);

		console.log("secret-key:", secret_key);
		console.log("secret-key-timestamp:", secret_key_timestamp);
		console.log("request_hash:", request_hash);
	} catch (e) {
		console.error(e);
	}
};
export default activateEKyc;
