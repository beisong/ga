[1mdiff --git a/.gitignore b/.gitignore[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/.meteor/.finished-upgraders b/.meteor/.finished-upgraders[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/.meteor/.gitignore b/.meteor/.gitignore[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/.meteor/.id b/.meteor/.id[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/.meteor/packages b/.meteor/packages[m
[1mindex b4a15c5..88baaa6 100644[m
[1m--- a/.meteor/packages[m
[1m+++ b/.meteor/packages[m
[36m@@ -6,16 +6,16 @@[m
 [m
 meteor-base@1.0.4             # Packages every Meteor app needs to have[m
 mobile-experience@1.0.4       # Packages for a great mobile UX[m
[31m-mongo@1.1.12                   # The database Meteor supports right now[m
[32m+[m[32mmongo@1.1.14                   # The database Meteor supports right now[m
 blaze-html-templates@1.0.4    # Compile .html files into Meteor Blaze views[m
[31m-reactive-var@1.0.10            # Reactive variable for tracker[m
[31m-jquery@1.11.9                  # Helpful client-side library[m
[31m-tracker@1.1.0                 # Meteor's client-side reactive programming library[m
[32m+[m[32mreactive-var@1.0.11            # Reactive variable for tracker[m
[32m+[m[32mjquery@1.11.10                  # Helpful client-side library[m
[32m+[m[32mtracker@1.1.1                 # Meteor's client-side reactive programming library[m
 [m
[31m-standard-minifier-css@1.2.0   # CSS minifier run for production mode[m
[31m-standard-minifier-js@1.2.0    # JS minifier run for production mode[m
[31m-es5-shim@4.6.14                # ECMAScript 5 compatibility for older browsers.[m
[31m-ecmascript@0.5.8              # Enable ECMAScript2015+ syntax in app code[m
[32m+[m[32mstandard-minifier-css@1.3.2   # CSS minifier run for production mode[m
[32m+[m[32mstandard-minifier-js@1.2.1    # JS minifier run for production mode[m
[32m+[m[32mes5-shim@4.6.15                # ECMAScript 5 compatibility for older browsers.[m
[32m+[m[32mecmascript@0.5.9              # Enable ECMAScript2015+ syntax in app code[m
 shell-server@0.2.1            # Server-side component of the `meteor shell` command[m
 [m
 #autopublish@1.0.7             # Publish all data to the clients (for prototyping)[m
[36m@@ -23,4 +23,4 @@[m [minsecure@1.0.7                # Allow all DB writes from clients (for prototypin[m
 [m
 iron:router[m
 #session@1.1.6[m
[31m-#twbs:bootstrap[m
\ No newline at end of file[m
[32m+[m[32m#twbs:bootstrap[m
[1mdiff --git a/.meteor/platforms b/.meteor/platforms[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/.meteor/release b/.meteor/release[m
[1mindex 72980bc..c260846 100644[m
[1m--- a/.meteor/release[m
[1m+++ b/.meteor/release[m
[36m@@ -1 +1 @@[m
[31m-METEOR@1.4.1.1[m
[32m+[m[32mMETEOR@1.4.2[m
[1mdiff --git a/.meteor/versions b/.meteor/versions[m
[1mindex 4a9fb5c..0804ea8 100644[m
[1m--- a/.meteor/versions[m
[1m+++ b/.meteor/versions[m
[36m@@ -1,34 +1,34 @@[m
 allow-deny@1.0.5[m
 autoupdate@1.2.11[m
[31m-babel-compiler@6.9.1[m
[31m-babel-runtime@0.1.11[m
[31m-base64@1.0.9[m
[31m-binary-heap@1.0.9[m
[32m+[m[32mbabel-compiler@6.13.0[m
[32m+[m[32mbabel-runtime@0.1.13[m
[32m+[m[32mbase64@1.0.10[m
[32m+[m[32mbinary-heap@1.0.10[m
 blaze@2.1.9[m
 blaze-html-templates@1.0.5[m
 blaze-tools@1.0.10[m
[31m-boilerplate-generator@1.0.10[m
[31m-caching-compiler@1.1.7[m
[32m+[m[32mboilerplate-generator@1.0.11[m
[32m+[m[32mcaching-compiler@1.1.8[m
 caching-html-compiler@1.0.7[m
[31m-callback-hook@1.0.9[m
[31m-check@1.2.3[m
[32m+[m[32mcallback-hook@1.0.10[m
[32m+[m[32mcheck@1.2.4[m
 ddp@1.2.5[m
 ddp-client@1.2.9[m
[31m-ddp-common@1.2.6[m
[32m+[m[32mddp-common@1.2.7[m
 ddp-server@1.2.10[m
 deps@1.0.12[m
[31m-diff-sequence@1.0.6[m
[31m-ecmascript@0.5.8[m
[31m-ecmascript-runtime@0.3.14[m
[31m-ejson@1.0.12[m
[31m-es5-shim@4.6.14[m
[31m-fastclick@1.0.12[m
[31m-geojson-utils@1.0.9[m
[32m+[m[32mdiff-sequence@1.0.7[m
[32m+[m[32mecmascript@0.5.9[m
[32m+[m[32mecmascript-runtime@0.3.15[m
[32m+[m[32mejson@1.0.13[m
[32m+[m[32mes5-shim@4.6.15[m
[32m+[m[32mfastclick@1.0.13[m
[32m+[m[32mgeojson-utils@1.0.10[m
 hot-code-push@1.0.4[m
 html-tools@1.0.11[m
 htmljs@1.0.11[m
 http@1.1.8[m
[31m-id-map@1.0.8[m
[32m+[m[32mid-map@1.0.9[m
 insecure@1.0.7[m
 iron:controller@1.0.12[m
 iron:core@1.0.11[m
[36m@@ -38,43 +38,43 @@[m [miron:location@1.0.11[m
 iron:middleware-stack@1.1.0[m
 iron:router@1.0.13[m
 iron:url@1.0.11[m
[31m-jquery@1.11.9[m
[32m+[m[32mjquery@1.11.10[m
 launch-screen@1.0.12[m
 livedata@1.0.18[m
[31m-logging@1.1.15[m
[31m-meteor@1.2.17[m
[32m+[m[32mlogging@1.1.16[m
[32m+[m[32mmeteor@1.6.0[m
 meteor-base@1.0.4[m
[31m-minifier-css@1.2.14[m
[31m-minifier-js@1.2.14[m
[31m-minimongo@1.0.17[m
[32m+[m[32mminifier-css@1.2.15[m
[32m+[m[32mminifier-js@1.2.15[m
[32m+[m[32mminimongo@1.0.18[m
 mobile-experience@1.0.4[m
[31m-mobile-status-bar@1.0.12[m
[31m-modules@0.7.6[m
[31m-modules-runtime@0.7.6[m
[31m-mongo@1.1.12[m
[31m-mongo-id@1.0.5[m
[31m-npm-mongo@1.5.49[m
[31m-observe-sequence@1.0.12[m
[31m-ordered-dict@1.0.8[m
[31m-promise@0.8.7[m
[32m+[m[32mmobile-status-bar@1.0.13[m
[32m+[m[32mmodules@0.7.7[m
[32m+[m[32mmodules-runtime@0.7.7[m
[32m+[m[32mmongo@1.1.14[m
[32m+[m[32mmongo-id@1.0.6[m
[32m+[m[32mnpm-mongo@2.2.11_2[m
[32m+[m[32mobserve-sequence@1.0.14[m
[32m+[m[32mordered-dict@1.0.9[m
[32m+[m[32mpromise@0.8.8[m
 random@1.0.10[m
 reactive-dict@1.1.8[m
[31m-reactive-var@1.0.10[m
[31m-reload@1.1.10[m
[31m-retry@1.0.8[m
[31m-routepolicy@1.0.11[m
[32m+[m[32mreactive-var@1.0.11[m
[32m+[m[32mreload@1.1.11[m
[32m+[m[32mretry@1.0.9[m
[32m+[m[32mroutepolicy@1.0.12[m
 shell-server@0.2.1[m
 spacebars@1.0.13[m
 spacebars-compiler@1.0.13[m
[31m-standard-minifier-css@1.2.0[m
[31m-standard-minifier-js@1.2.0[m
[32m+[m[32mstandard-minifier-css@1.3.2[m
[32m+[m[32mstandard-minifier-js@1.2.1[m
 templating@1.2.15[m
 templating-compiler@1.2.15[m
 templating-runtime@1.2.15[m
 templating-tools@1.0.5[m
[31m-tracker@1.1.0[m
[32m+[m[32mtracker@1.1.1[m
 ui@1.0.12[m
[31m-underscore@1.0.9[m
[31m-url@1.0.10[m
[31m-webapp@1.3.11[m
[32m+[m[32munderscore@1.0.10[m
[32m+[m[32murl@1.0.11[m
[32m+[m[32mwebapp@1.3.12[m
 webapp-hashing@1.0.9[m
[1mdiff --git a/client/main.html b/client/main.html[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/client/main.js b/client/main.js[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/client/style.css b/client/style.css[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/client/template/applicationlayout.html b/client/template/applicationlayout.html[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/lib/collections.js b/lib/collections.js[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/package.json b/package.json[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/server/main.js b/server/main.js[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/server/methods.js b/server/methods.js[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/server/publish.js b/server/publish.js[m
[1mold mode 100644[m
[1mnew mode 100755[m
