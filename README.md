# Sandboxed Browser Extension

## Description
The Sandboxed Browser Extension allows users to open links in a sandboxed environment, ensuring safe browsing without affecting their primary browsing experience or PC. This environment restricts downloads, providing an additional layer of security.

## Features
- **Sandboxed Environment:** Open links in an isolated environment within the browser.
- **Secure Browsing:** Prevent downloads within the sandbox to ensure safety.
- **Easy Input:** Simple input method for URLs to be sandboxed.

## Installation
1. Clone or download this repository to your local machine.
2. Open the Microsoft Edge browser and navigate to `edge://extensions/`.
3. Enable "Developer mode" using the toggle switch in the bottom-left corner.
4. Click on "Load unpacked" and select the directory where you cloned/downloaded this repository.

## Usage
1. Click on the extension icon in the browser toolbar.
2. Enter the URL you want to open in the sandboxed environment.
3. Click on the "Open in Sandbox" button.
4. A new tab will open with the specified URL within a sandboxed iframe.

## Files
- `manifest.json`: Defines the extension and permissions.
- `popup.html`: User interface for entering URLs.
- `popup.js`: Handles user input and messaging to background script.
- `sandbox.html`: Creates the sandboxed environment for browsing.
- `sandbox.js`: Manages the iframe creation for sandboxed browsing.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Feel free to submit issues and pull requests to improve the extension. Contributions are always welcome!

## Acknowledgments
Thank you to all the open-source libraries and tools that make projects like this possible.

