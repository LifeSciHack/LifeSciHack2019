# CapChem

  **Introduction**
    
  CapChem is a way to recognize IUPAC and common molecule names and grabbing information such as 2D and 3D structure, NMR, IR, Molecular Weight, Boiling Point etc. from PubMed Database on the android platform.
    
  **How it Works**
    
  Capchem is simple with a lot of back-end being developed
    
  User Snaps a picture -> OCR Engine Analyzes Picture to get Text -> PubMed retrieves data result -> User is displayed information
    
  Capchem is used to make a life of a scientist easier when he/she is having trouble remembering the molecules and has to go through the constant struggle of looking up information. It also allows easier access for NMRs and IRs for data analysis of their molecules. Scientists can also rapidly discover what their molecule looks like without the fustration of reading IUPAC common names. 
    
  Non-scientists can also use this app based on user interest for information :). 
    
  **Development**
    
  UI was designed in Axure(7.0) by myself and is a rough outlook of what the app will look like.
    
  The App is still being developed and not released on Google Play. There is no future promise for IOS Development yet. Features included are:
    
- [x] User can Log in and log out of Parse Database system. The Data has also been transferred to MongoDB in the meantime. 
- [x] User can grab an image from their folder or use the camera to take a picture of an IUPAC name and run the OCR Engine on the image.
- [x] User has the ability to run the engine task Asynchronously or Synchronously
- [ ] A lot of the Front-End and UI Design still needs to be developed. 
- [ ] HTTP GET and POST requests for PubMed still need to be developed. 
- [ ] Recognition of molecules based on their skeleton structure.

### UI Design

**Log In Screen & Information Screen**

<p align="center">
  <img src="https://github.com/Sulstice/CapChem-Android/blob/master/UIDesign/login_page.png" width="350"/>
  <img src="https://github.com/Sulstice/CapChem-Android/blob/master/UIDesign/information_screen.png" width="350"/>
</p>

**Profile Page**

<p align="center">
  <img src="https://github.com/Sulstice/CapChem-Android/blob/master/UIDesign/profile_screen.png" width="350"/>
</p>

**App Landing Page**

http://sulstice.github.io/ 

**Installation Instructions**

Android CapChem App
------------------

The mobile CapChem App in the demo may also be run on Android. The Android version of the Repair App is written in Java, the native language for an Android device.  

Some configuration and permissions for camera will be required for it to work.  Read on to learn about the configuration process.

> This sample was tested with  Android Studio version 2.1.

Android CapChem App Installation
-------------------------------

Now you are ready to install the Android App.  

In the AndroidRepairApp folder you will find runnable sample code for Android CapChem App.

1. On a PC or Mac machine, clone the GitHub repository.  

Configure Android CapChem App settings
-------------------------------------

To configure the Android Repair App follow these instructions.

1. Open **Android Studio**.  If it a project is already open, then close that project.
2. In the Quick Start menu, select **Open an existing Android Studio project**.
3. Select the **AndroidRepairApp** directory you cloned from the GitHub repository.
4. Click **OK**.

Items that you need a real Android device to run
------------------------------------------------

Some of the functionality in the app will not work in the Android emulator.  You must run the app on a real device to use the following functionality.

1. Uploading a video to the Office 365 Video Portal.
2. Opening Word, Excel, and PowerPoint documents in the native Android Office applications via Deep Links. 

Set Up Android Virtual Device
-----------------------------

The Android CapChem App targets the Nexus 9 device.  These steps describe how to configure an Android Virtual Device that replicates the Nexus 9.

1. In Android Studio, click the **Tools** menu, select **Android**, and click **AVD Manager** to open the Android Virtual Device Manager.
2. Use the Android Virtual Device Manager to create the Nexus 9 device.  **Click Create Virtual Device.**  Refer to the image below.

	![](https://raw.githubusercontent.com/OfficeDev/Property-Inspection-Code-Sample/master/Documents/Create%20AVD.png)

3. In the category list select **Tablet**, then select the **Nexus 9** device and click **Next**.  Refer to the image below.

	![](https://raw.githubusercontent.com/OfficeDev/Property-Inspection-Code-Sample/master/Documents/AVD%20Tablet%20Nexus%209.png)

4. Select **Lollipop 22 x86**. (Select Lollipop 22 armeabi-v7a if you can’t install HAXM.  For example: If your Android Studio is installed on a virtual machine that does not support VT-x)  Click **Next**.  Refer to the image below.

	![](https://raw.githubusercontent.com/OfficeDev/Property-Inspection-Code-Sample/master/Documents/AVD%20System%20Image%20Lollipop.png)

5. Ensure the Orientation is set to **Landscape** and click **Finish**.  Refer to the image below.

	![](https://raw.githubusercontent.com/OfficeDev/Property-Inspection-Code-Sample/master/Documents/AVD%20Nexus%209%20Advanced%20Settings.png)

6. In the Android Virtual Device Manager, start the Nexus 9 Android Virtual Device.

	> **Note:** When the device is starting you can see if HAXM is enabled on your system and if the emulator is taking advantage of it.

	![](https://raw.githubusercontent.com/OfficeDev/Property-Inspection-Code-Sample/master/Documents/Select%20Nexus%209%20AVD%20-%202.png)

	![](https://raw.githubusercontent.com/OfficeDev/Property-Inspection-Code-Sample/master/Documents/Starting%20Nexus%209%20AVD.png)

7. Wait for the device to boot, and unlock it.  

	> **Note:** This can take a long time, up to 20 minutes if you have a slow computer or if you are using the ARM version of the device.


**Acknoledgements**

Sam Dunning: Idea of using IUPAC Name instead of Skeleton Based Molecules
Icon Credit: 

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
