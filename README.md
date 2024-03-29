# xtensi0n-Notificaxi0n
CS5331 Term Project

## Video
 
A video demonstrating the use of xtensi0n in chromium with the real-time monitoring system notificaxi0n can be found in `video.mp4`.


## How to install xtensi0n

1. Open Google Chrome and go to Options > More Tools > Extensions
2. Click on 'Load unpacked' button to load custom extension (you may need to turn on developer mode)
3. Navigate to this folder and click 'Select Folder'
4. xtensi0n should be installed and there will be a custom new tab page to run xtensi0n functions


## How to install notificaxi0n in Chromium

1. Follow the steps at https://www.chromium.org/developers/how-tos/get-the-code to set up your machine and download the Chromium source code. This may take some time.
2. Set up the build using `gn gen out/Default` and copy the `chrome` and `ash` folder into the `src` folder, replacing the files when asked to do so.
3. Build Chromium using the command `autoninja -C out\Default chrome`. This may take a few hours.
4. Launch the browser using `out\Default\chrome.exe` and install xtensi0n using the steps above.
5. When accessing `tabs` API, a notification pop-up will appear showing the extension that requested the API as well as the function requested.
6. This information is also logged into a file `log.log` in your `C:\` drive with the timestamp, extension name and function requested.
