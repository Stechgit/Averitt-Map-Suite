This web application is a mapping software created for Averitt Express.  It is a group project designed with fellow students for our senior capstone course.
This application will help Averitt Express determine which drivers deviated from their scheduled shipping routes.

![image](https://github.com/Stechgit/Averitt-Map-Suite/assets/127151101/e45469ca-56e8-4e10-8bb9-7a3efffb6277)



<b>To start the program, open index.html</b>

The software takes 3 inputs in the following order, these inputs are CSV files.

1. <b>The Service Center File (ServiceCenters.csv)</b>
    
    You will be prompted to upload this file upon opening index.html.
   
    ![image](https://github.com/Stechgit/Averitt-Map-Suite/assets/127151101/c2f105d5-01a6-4ae1-b32e-6f6c19ad2f7a)

    This csv file contains information on Averitts 80+ distribution warehouses across the southeastern US.
    Uploading the ServiceCenters.csv file will populate these distribution centers to the map.  
    It uses longitude and latitude to plot the points, and places the distribution center's abbreviation into the map marker.
    ![image](https://github.com/Stechgit/Averitt-Map-Suite/assets/127151101/b002ad1c-1b5b-4313-8661-72a73ece6697)

3. <b>The Scheduled Paths File (ScheduledPaths.csv)</b>

    This csv file contains information on the paths scheduled for all drivers for a specific distribution center.  Upload this in the Scheduled Shipment section on the left side bar, and check the "Show Scheduled Paths(s)" button.
    This data is used to create polylines that plot out the routes that are scheduled for that month.
    
    ![image](https://github.com/Stechgit/Averitt-Map-Suite/assets/127151101/48c1730f-476a-4b15-bba9-185a0efd5b61)

4. <b>The Actual Paths File (ActualPaths.csv)</b>

    This csv file contains information that the truck drivers actually took for each shipment they were assigned.  Upload this file into the Actual Shipments section on the left side bar, and check the "Show Actual Path(s)" button.
    This data also creates polylines that plot out the routes the truckers chose to take.
    
   
    ![image](https://github.com/Stechgit/Averitt-Map-Suite/assets/127151101/da28080d-d1ab-4565-a020-3ffa942e00ec)

Now under map settings, select your Origin and Desination.  In this example, I've selected Nashville to Dallas.  Select a shipment date range, but make sure your start date is before November 2022.  Select today's date as the end date, then hit apply.


![image](https://github.com/Stechgit/Averitt-Map-Suite/assets/127151101/4a59fbe2-5f53-4533-ab34-bef9eacd8b4c)

If all information and settings were selected correctly, your map should look similar to something like this.  The Scheduled Paths are shown with blue arrows and the Actual Paths are shown with red arrows.  You can see in this example, one driver was supposed to drive from NAS to DAL, but instead chose to drive straight to TUL.  
![image](https://github.com/Stechgit/Averitt-Map-Suite/assets/127151101/3c9a92a5-df8c-4bff-a957-d76004b59676)

You can also export your map to a PDF by using the Export to PDF button on the side bar.

![image](https://github.com/Stechgit/Averitt-Map-Suite/assets/127151101/f146c01f-5f82-42e0-95c3-316e25f17872)

The program also generates a list of path conflicts that indicate when a truck driver deviates from their assigned route.  You can see below these truckers deviated from their routes, as they were supposed to drive directly from NAS to DAL.

![image](https://github.com/Stechgit/Averitt-Map-Suite/assets/127151101/301feba4-1745-4515-8be8-d3196d0f8225)
