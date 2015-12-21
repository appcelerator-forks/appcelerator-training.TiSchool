# DEPRECATED

<img src='http://robohash.org/https://github.com/appcelerator-training/TiSchool' style="float:right;margin:0 0 20px 20px;border:none;" width="200" height="200" align="right">
TiSchool
========

TiSchool (rhymes with "High School") is Appcelerator's Titanium educational materials for secondary schools, clubs, etc. These materials are designed to help teachers and volunteers teach Titanium at the High School, Jr. High School level. Materials are open source and free for all to use according to the license terms below.


# License

Unless otherwise stated, the slides and contents of this repository are licensed under the [Attribution-NonCommercial-ShareAlike 3.0 Unported (CC BY-NC-SA 3.0)](http://creativecommons.org/licenses/by-nc-sa/3.0/) license. You are free to use, copy, distribute, and adapt these materials under these terms:

* You cannot use these slides or derivatives for commercial purposes (e.g. classes you charge for). Commercial use is restricted to Authorized Training Partners (ATPs). Visit [http://www.appcelerator.com/form/forms/www/partner-training-submit](http://www.appcelerator.com/form/forms/www/partner-training-submit) for information on becoming an ATP.
* You must attribute Appcelerator, Inc. in any use or derivative of these materials.
* If you distribute these materials, you must do so under the same license.

These slides use [Crystal Clear](http://commons.wikimedia.org/wiki/Crystal_Clear) icons, which are licensed under the [LGPL](http://www.everaldo.com/crystal/?action=license) license.

# Instructions for use

1. Download a copy of [presentation-engine](https://github.com/appcelerator-training/presentation-engine) to a suitable directory on your computer.
2. Download a copy of this repo, and move folders if necessary, so that you end up with a folder structure like this:

```
some_folder  
   - presentation-engine (folder, must be named as shown here!)  
   - tischoolslides (folder)  
      - index.html  <-- TOC for the whole course  
         - 000 (folder)  
            - index.html <-- TOC for the lesson
            - lab.html <-- Lab for the lesson
         ... etc
```

You might want to copy or move the demos into your Titanium Workspace directory, though that's optional.

## Running a presentation

1. Open the coursename/index.html in your browser. Safari seems to work the best, and Firefox works well too. With Chrome, you'll have to re-open the Presenter Notes window for every lesson. Internet Explorer is untested, but versions 8 or 9 probably work fine.
2. Click a lesson's name, which opens the 000/index.html file for that lesson.
3. Click the "Notes" icon to open a separate window (you might need to override any pop-up blocker to see that window). That new window will display presenter notes as you step through the slides.
4. At the end of a lesson, if running Chrome, close the presenter notes window. In all browsers, click the home icon, which will take you back to the course TOC slide. Click the next lesson's title. (If running Chrome, reopen the presenter notes window.)

## Navigating within a presentation

Press right or left arrow keys to move forward/back in a presentation. Some slides include "vertically nested" sub-slides. Such nested slides will show a down-pointing arrow. Press the down-arrow key to move through those sub-slides.

Press the Spacebar to see a partial overview of the slides in a presentation.

## How to teach this class

Be sure to see the <a href='https://github.com/appcelerator-training/TiSchool/blob/master/course_structure.md'>Course Structure</a> file for strategies for teaching this course.


# Corrections and Contributions

We'd love your help with contributions, corrections, and translations. 

For contributions of new materials, please follow the typical GitHub conventions: "fork" the project, make your changes, and submit a pull request. This would the technique you'd use to translate the materials, add new slides, add new demo or lab code projects, and even to submit corrections.

If you have a problem to report, you can also use GitHub's bug reporting feature. Please try to be specific to the lesson or file that's exhibiting the problem and carefully note the exact steps to reproduce the problem.

For translation instructions, see either the tcad-certification or tcmd-certification repos for all the details.



