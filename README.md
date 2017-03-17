# Advanced Custom Fields: Advanced Image Crop Add-on #
Contributors: danielsetreus, andersthorborg
Tags: afc, advanced custom fields, image crop, image, crop
Requires at least: 3.5
Tested up to: 4.6
Stable tag: 1.4.10
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

An image field making it possible/required for the user to crop the selected image to the specified image size or dimensions. Since I'm lazy this plugin will, for now, not be available through Wordpress. Get it here, and stay updared :).

## Description ##
This is a fork of the wonderful Wordpress plugin [ACF-Image-Crop](https://github.com/andersthorborg/ACF-Image-Crop) that lets you define ACF fields for uploading an image and then crop it. In my opinion however, it was missing some key features. For more information about the original plugin, [go check it out](https://github.com/andersthorborg/ACF-Image-Crop).

### Features added in this fork: ###
**Crop to a fixed with but flexible height**
The croped image may not have a lower with than what you specify, but can however be of any height.

**Croped to a fixed height but flexible width**
Like the above but in reverse... you get it. 

**Croped to ratio**
The image will be croped to a defined ratio.

**Croped to ratio with minimun width or height**
This is really the reason I made this fork since I required all user created images to be of a specific ratio, but at the same time make sure they were all atleast x pixels wide. 

### Compatibility ###

This add-on will work with:

* version 5 and up

## Installation ##
1. Download or clone repo into your plugins folder in Wordpress
2. Make sure you have ACF v5 installed and activated :)
2. Activate the plugin via the Plugins admin page

## Changelog ##

### ACF-Image-Crop 1.4.19 -->FORK--> ACF-Advanced-Image-Crop 1.0 ###
* Removed compatibility with ACF 4. Tested with ACF Pro 5.4
* Added the crop options:
    * Crop to fixed width and flexible height
    * Crop to fixed height and flexible width
    * Crop to ratio
    * Crop to ratio with minimum width
    * Crop to ratio with minimum height
* Known issus:
    * Does not warn user when input image is to small for the given crop rules, or when the ratio demands a image with greater width / height. The crop overlay gets a bit buggy. 

### 1.4.10 ###
* Add compatibility with ACF Pro 5.5.5

### 1.4.9 ###
* Use acf-image-crop/filename_postfix to allow custom filename postfixes

### 1.4.8 ###
* Fix button styling
* Prevent php warnings for unset field settings

### 1.4.7 ###
* Added compatibility with ACF PRO 5.4.2.2 icons

### 1.4.6 ###
* Added compatibility with ACF 4.4.2 and ACF PRO 5.2.9

### 1.4.5 ###
* Added compatibility with ACF 5.2.7
* Added image quality filter (needs testing)

### 1.4.4 ###
* Fixed migration from image field to not only return image ID
* Fixed a js error in field settings caused by a change in class names in ACF

### 1.4.3 ###
* Removed unused assets

### 1.4.2 ###
* Improved migration from standard field to ACF crop field
* Fixed and issue that caused warnings when options was not set
* Fixed crop preview not showing correct crop position in some browsers
* Improved error handling when server setup does not support image handling
* Fixed original image data missing when saving to media library in v4
* Improved error handling in v4

### 1.4.1 ###
* Fixed issue with image not cropping in v4

### 1.4 ###
* Fixed images with dot in the file name resulting in odd cropped image names
* Fixed issues with php notices in v4
* Fixed issues with broken image fields in v4
* Temporarily fixed images smaller than preview size not being added (ACF bug)
* Updated localization thanks to @tmconnect
* Various tweaks and fixes by @tmconnect

### 1.3 ###
* Updated to be compatible with original image field changes as of ACF Pro 5.0.8. IMPORTANT: As this is a quick fix to ensure compatability with the newest ACF PRO version it is not backwards compatible. If you are using ACF Pro 5.0.7 and below, please use version 1.2 of this add-on.

### 1.2 ###
* Improved: Edit image is now working for most cropped image fields.
* Fix: Wrong GUID for generated images that could cause issues when moving a site to a new location
* Tweak: Added "original_image"-attribute when using return type "Object", containing the original image data.
* Tweak: Return type "Object" is now available when not saving cropped image to media library. The data except from url, width and height is fetched from the original image.
* Feature: It is now possible to hide cropped images from the media dialog. (See the new settings section) NB.: Only works for future cropped images.
* Feature: Retina-mode, that makes the image field require and crop double the dimensions. Results in better integration with plugins like WP Retina 2x
* Feature: Settings-seciton under Settings -> Media. Here you can choose to hide cropped images from the media dialog as well as enable/disable global retina mode.

### 1.1.4 ###
* Fixed an issue causing a php warning when editing custom fields
* Fixed a js-issue causing image-crop-field hiding all subfields when editing repeater-/flexible content-fields

### 1.1.3 ###
* Fixed another issue with save to media option

### 1.1.2 ###
* Fixed issue with force crop option
* Fixed issue with save to media option
* Fixed issue with return type object

### 1.1.1 ###
* Removed unsued references and that caused php warnings
* Added a missing default value that caused a php warning

### 1.1 ###
* Added ACF5 compatibility.
* Please report any compatibility issues. As this has been an urgent feature request I have not had as much time for testing as I would have liked.

### 1.0 ###
* Added option to save the image to media library or refer directly to the created image, not using the media library.
* Added better compatibility with the native image field making it possible to migrate from the regular image field to the crop-image field without losing the images currently attached. (It doesn't work the other way around)

### 0.8 ###
* Fixed an issue resulting in a black image, when image was cropped without moving the crop handles

### 0.7 ###
* Fixed return types other than image id causing fatal error

### 0.6 ###
* Fix for WP installs with non-standard folder structures

### 0.5 ###
* Initial Release.

