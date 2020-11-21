In order to run this application you need to disable a security feature in your browser.
In late 2019 most browsers added a security feature that does not let you fetch files locally from your computer,
which is exactly what we need to do here.

We used Firefox for all our testing. To make it work in Firefox write "about:config" in the URL.
This opens a page where you can search for features to enable and disable. From there search
"privacy.unique_file_origin" and set this to False. The web application should then be able to fetch
the datasets locally.
