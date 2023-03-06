This web application is a mapping software created for Averitt Express.  It is a group project designed with fellow students for our senior capstone course.
This application will help Averitt Express determine which drivers deviated from their scheduled shipping routes.

The software is still under development and has 3 more iterations left before completion.

To start the program, open index.html

The software takes 3 inputs in the following order, these inputs are CSV files.

1. The Service Center File (ServiceCenters.csv)
    This csv file contains information on Averitts 80+ distribution warehouses across the southeastern US.
    Uploading the ServiceCenters.csv file will populate these distribution centers to the map.  
    It uses the longitude and latitude to plot the points, and places the distribution center's abbreviation into the map marker.

2. The Scheduled Paths File (ScheduledPaths.csv)
    This csv file contains information on the paths scheduled for all drivers for a specific distribution center.
    This data is used to create polylines that plot out the routes that are scheduled for that month.
    When the file is uploaded, these scheduled path lines are shown in blue.

3. The Actual Paths File (ActualPaths.csv)
    This csv file contains information that the truck drivers actually took for each shipment they were assigned.
    This data also creates polylines that plot out the routes the truckers chose to take.
    When the file is uploaded, these actual path lines are shown in red.

The future iterations will implement the following features:

Iteration 4: Path Conflicts
When truck drivers deviate from the scheduled route, the program will generate a "path conflict" that displays the details comparing the scheduled route to the Actual route.
This will help the operations team identify when their truck drivers are incorrectly following their routes.

Iteration 5: Export to PDF
This iteration will involve creating a PDF of the map window so that the operations team can print the map and pass it on to their team.
This PDF will also have a list of all path conflicts for the given routes.

Iteration 6: Heat Map
This iteration will involve implementing a heat map to show the frequency of shipping through each warehouse.

