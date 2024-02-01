// useAepsIntegration.js
import {EkoAEPSGateway} from "@ekoindia/aeps-gateway-lib";
import { useEffect } from "react";

const aepsIntegration = () => {
	useEffect(() => {
		// Ensure that the AEPS Gateway library is available
		if (window.EkoAEPSGateway) {
			// Create a new instance of the EkoAEPSGateway
			const aeps = new EkoAEPSGateway();
		
			// STEP 3: Configure AePS Gateway
			const configureAEPS = () => {
				try {
					// Configure your developer API details...
					aeps.config({
						partner_name: "Your Company Name",
						initiator_logo_url:
							"https://your-website.com/your-logo.png",
						initiator_id: "9962981729",
						developer_key: "becbbce45f79c6f5109f848acd540567",
						secret_key:
							"y4aNr2cuSuaX2fCsfXMVopqvaZtx9MKHCcsF73fHxvc=",
						secret_key_timestamp: "1585999782835",
						user_code: "20810200",
						language: "en",
						environment: "uat",
					});

					// Configure your callback URL for transaction-confirmation and for getting the final result...
					aeps.setCallbackURL(
						"https://your-website.com/eko_aeps_callback"
					);
				} catch (error) {
					console.error("Error configuring AEPS:", error);
				}
			};

			configureAEPS();

			// STEP 4: Launch the AePS Gateway
			const launchAePSGateway = () => {
				aeps.open();
			};

			launchAePSGateway();
		} else {
			console.error(
				"EkoAEPSGateway library not found. Make sure you have included the library script in your HTML."
			);
		}
	}, []);
};

export default useAepsIntegration;
