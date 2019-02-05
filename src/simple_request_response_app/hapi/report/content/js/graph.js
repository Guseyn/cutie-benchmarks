/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 24.0, "minX": 0.0, "maxY": 182.0, "series": [{"data": [[0.0, 24.0], [0.1, 30.0], [0.2, 31.0], [0.3, 31.0], [0.4, 32.0], [0.5, 34.0], [0.6, 35.0], [0.7, 35.0], [0.8, 35.0], [0.9, 35.0], [1.0, 36.0], [1.1, 36.0], [1.2, 37.0], [1.3, 37.0], [1.4, 37.0], [1.5, 37.0], [1.6, 38.0], [1.7, 38.0], [1.8, 38.0], [1.9, 38.0], [2.0, 39.0], [2.1, 39.0], [2.2, 39.0], [2.3, 39.0], [2.4, 39.0], [2.5, 39.0], [2.6, 39.0], [2.7, 39.0], [2.8, 40.0], [2.9, 40.0], [3.0, 41.0], [3.1, 41.0], [3.2, 41.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 41.0], [3.8, 42.0], [3.9, 42.0], [4.0, 42.0], [4.1, 42.0], [4.2, 42.0], [4.3, 42.0], [4.4, 43.0], [4.5, 43.0], [4.6, 44.0], [4.7, 44.0], [4.8, 44.0], [4.9, 45.0], [5.0, 46.0], [5.1, 46.0], [5.2, 46.0], [5.3, 46.0], [5.4, 46.0], [5.5, 47.0], [5.6, 47.0], [5.7, 48.0], [5.8, 48.0], [5.9, 48.0], [6.0, 49.0], [6.1, 49.0], [6.2, 50.0], [6.3, 51.0], [6.4, 51.0], [6.5, 52.0], [6.6, 53.0], [6.7, 53.0], [6.8, 53.0], [6.9, 53.0], [7.0, 53.0], [7.1, 53.0], [7.2, 54.0], [7.3, 54.0], [7.4, 54.0], [7.5, 54.0], [7.6, 55.0], [7.7, 56.0], [7.8, 56.0], [7.9, 56.0], [8.0, 56.0], [8.1, 57.0], [8.2, 57.0], [8.3, 57.0], [8.4, 57.0], [8.5, 57.0], [8.6, 57.0], [8.7, 57.0], [8.8, 57.0], [8.9, 57.0], [9.0, 58.0], [9.1, 58.0], [9.2, 59.0], [9.3, 59.0], [9.4, 59.0], [9.5, 59.0], [9.6, 59.0], [9.7, 59.0], [9.8, 59.0], [9.9, 59.0], [10.0, 59.0], [10.1, 59.0], [10.2, 60.0], [10.3, 60.0], [10.4, 60.0], [10.5, 60.0], [10.6, 60.0], [10.7, 60.0], [10.8, 60.0], [10.9, 60.0], [11.0, 60.0], [11.1, 60.0], [11.2, 61.0], [11.3, 61.0], [11.4, 61.0], [11.5, 61.0], [11.6, 61.0], [11.7, 61.0], [11.8, 61.0], [11.9, 61.0], [12.0, 61.0], [12.1, 62.0], [12.2, 62.0], [12.3, 62.0], [12.4, 62.0], [12.5, 62.0], [12.6, 62.0], [12.7, 62.0], [12.8, 62.0], [12.9, 63.0], [13.0, 63.0], [13.1, 63.0], [13.2, 63.0], [13.3, 64.0], [13.4, 64.0], [13.5, 65.0], [13.6, 65.0], [13.7, 66.0], [13.8, 67.0], [13.9, 69.0], [14.0, 69.0], [14.1, 70.0], [14.2, 70.0], [14.3, 70.0], [14.4, 70.0], [14.5, 72.0], [14.6, 72.0], [14.7, 72.0], [14.8, 73.0], [14.9, 74.0], [15.0, 74.0], [15.1, 75.0], [15.2, 75.0], [15.3, 75.0], [15.4, 75.0], [15.5, 76.0], [15.6, 77.0], [15.7, 77.0], [15.8, 78.0], [15.9, 78.0], [16.0, 79.0], [16.1, 79.0], [16.2, 79.0], [16.3, 80.0], [16.4, 80.0], [16.5, 80.0], [16.6, 80.0], [16.7, 80.0], [16.8, 81.0], [16.9, 81.0], [17.0, 81.0], [17.1, 81.0], [17.2, 81.0], [17.3, 81.0], [17.4, 81.0], [17.5, 81.0], [17.6, 81.0], [17.7, 81.0], [17.8, 81.0], [17.9, 81.0], [18.0, 81.0], [18.1, 81.0], [18.2, 82.0], [18.3, 82.0], [18.4, 82.0], [18.5, 82.0], [18.6, 82.0], [18.7, 82.0], [18.8, 82.0], [18.9, 82.0], [19.0, 82.0], [19.1, 82.0], [19.2, 82.0], [19.3, 82.0], [19.4, 82.0], [19.5, 82.0], [19.6, 82.0], [19.7, 82.0], [19.8, 83.0], [19.9, 83.0], [20.0, 83.0], [20.1, 83.0], [20.2, 83.0], [20.3, 83.0], [20.4, 83.0], [20.5, 83.0], [20.6, 83.0], [20.7, 83.0], [20.8, 83.0], [20.9, 83.0], [21.0, 83.0], [21.1, 83.0], [21.2, 83.0], [21.3, 83.0], [21.4, 83.0], [21.5, 83.0], [21.6, 83.0], [21.7, 83.0], [21.8, 83.0], [21.9, 83.0], [22.0, 83.0], [22.1, 83.0], [22.2, 83.0], [22.3, 83.0], [22.4, 83.0], [22.5, 83.0], [22.6, 83.0], [22.7, 84.0], [22.8, 84.0], [22.9, 84.0], [23.0, 84.0], [23.1, 84.0], [23.2, 84.0], [23.3, 84.0], [23.4, 84.0], [23.5, 84.0], [23.6, 84.0], [23.7, 84.0], [23.8, 85.0], [23.9, 85.0], [24.0, 85.0], [24.1, 85.0], [24.2, 85.0], [24.3, 85.0], [24.4, 85.0], [24.5, 85.0], [24.6, 86.0], [24.7, 86.0], [24.8, 86.0], [24.9, 86.0], [25.0, 86.0], [25.1, 86.0], [25.2, 86.0], [25.3, 86.0], [25.4, 86.0], [25.5, 86.0], [25.6, 86.0], [25.7, 86.0], [25.8, 87.0], [25.9, 87.0], [26.0, 87.0], [26.1, 87.0], [26.2, 87.0], [26.3, 87.0], [26.4, 87.0], [26.5, 87.0], [26.6, 87.0], [26.7, 87.0], [26.8, 87.0], [26.9, 87.0], [27.0, 87.0], [27.1, 87.0], [27.2, 87.0], [27.3, 87.0], [27.4, 87.0], [27.5, 87.0], [27.6, 87.0], [27.7, 87.0], [27.8, 87.0], [27.9, 87.0], [28.0, 88.0], [28.1, 88.0], [28.2, 88.0], [28.3, 88.0], [28.4, 88.0], [28.5, 88.0], [28.6, 88.0], [28.7, 88.0], [28.8, 88.0], [28.9, 88.0], [29.0, 88.0], [29.1, 88.0], [29.2, 88.0], [29.3, 89.0], [29.4, 89.0], [29.5, 89.0], [29.6, 89.0], [29.7, 89.0], [29.8, 89.0], [29.9, 89.0], [30.0, 89.0], [30.1, 89.0], [30.2, 89.0], [30.3, 90.0], [30.4, 90.0], [30.5, 92.0], [30.6, 93.0], [30.7, 95.0], [30.8, 95.0], [30.9, 96.0], [31.0, 96.0], [31.1, 96.0], [31.2, 97.0], [31.3, 98.0], [31.4, 98.0], [31.5, 98.0], [31.6, 98.0], [31.7, 99.0], [31.8, 99.0], [31.9, 99.0], [32.0, 99.0], [32.1, 99.0], [32.2, 99.0], [32.3, 99.0], [32.4, 100.0], [32.5, 100.0], [32.6, 100.0], [32.7, 100.0], [32.8, 100.0], [32.9, 100.0], [33.0, 101.0], [33.1, 101.0], [33.2, 101.0], [33.3, 101.0], [33.4, 101.0], [33.5, 101.0], [33.6, 102.0], [33.7, 102.0], [33.8, 102.0], [33.9, 102.0], [34.0, 102.0], [34.1, 102.0], [34.2, 102.0], [34.3, 102.0], [34.4, 102.0], [34.5, 102.0], [34.6, 102.0], [34.7, 102.0], [34.8, 102.0], [34.9, 102.0], [35.0, 103.0], [35.1, 103.0], [35.2, 103.0], [35.3, 103.0], [35.4, 103.0], [35.5, 103.0], [35.6, 103.0], [35.7, 103.0], [35.8, 103.0], [35.9, 103.0], [36.0, 104.0], [36.1, 104.0], [36.2, 104.0], [36.3, 104.0], [36.4, 105.0], [36.5, 105.0], [36.6, 105.0], [36.7, 105.0], [36.8, 105.0], [36.9, 105.0], [37.0, 105.0], [37.1, 105.0], [37.2, 105.0], [37.3, 106.0], [37.4, 106.0], [37.5, 106.0], [37.6, 106.0], [37.7, 106.0], [37.8, 106.0], [37.9, 106.0], [38.0, 106.0], [38.1, 107.0], [38.2, 107.0], [38.3, 107.0], [38.4, 107.0], [38.5, 107.0], [38.6, 107.0], [38.7, 107.0], [38.8, 107.0], [38.9, 107.0], [39.0, 107.0], [39.1, 108.0], [39.2, 108.0], [39.3, 108.0], [39.4, 108.0], [39.5, 108.0], [39.6, 108.0], [39.7, 108.0], [39.8, 109.0], [39.9, 109.0], [40.0, 109.0], [40.1, 109.0], [40.2, 109.0], [40.3, 109.0], [40.4, 109.0], [40.5, 109.0], [40.6, 110.0], [40.7, 110.0], [40.8, 110.0], [40.9, 110.0], [41.0, 110.0], [41.1, 110.0], [41.2, 110.0], [41.3, 111.0], [41.4, 111.0], [41.5, 111.0], [41.6, 111.0], [41.7, 111.0], [41.8, 111.0], [41.9, 112.0], [42.0, 112.0], [42.1, 112.0], [42.2, 112.0], [42.3, 112.0], [42.4, 112.0], [42.5, 112.0], [42.6, 113.0], [42.7, 113.0], [42.8, 113.0], [42.9, 113.0], [43.0, 113.0], [43.1, 113.0], [43.2, 113.0], [43.3, 113.0], [43.4, 114.0], [43.5, 114.0], [43.6, 114.0], [43.7, 114.0], [43.8, 114.0], [43.9, 114.0], [44.0, 115.0], [44.1, 115.0], [44.2, 116.0], [44.3, 116.0], [44.4, 116.0], [44.5, 116.0], [44.6, 116.0], [44.7, 116.0], [44.8, 116.0], [44.9, 117.0], [45.0, 117.0], [45.1, 118.0], [45.2, 118.0], [45.3, 118.0], [45.4, 118.0], [45.5, 118.0], [45.6, 118.0], [45.7, 118.0], [45.8, 118.0], [45.9, 118.0], [46.0, 119.0], [46.1, 119.0], [46.2, 120.0], [46.3, 120.0], [46.4, 120.0], [46.5, 120.0], [46.6, 120.0], [46.7, 120.0], [46.8, 120.0], [46.9, 121.0], [47.0, 121.0], [47.1, 121.0], [47.2, 121.0], [47.3, 121.0], [47.4, 121.0], [47.5, 121.0], [47.6, 121.0], [47.7, 121.0], [47.8, 121.0], [47.9, 121.0], [48.0, 121.0], [48.1, 121.0], [48.2, 121.0], [48.3, 121.0], [48.4, 121.0], [48.5, 122.0], [48.6, 122.0], [48.7, 122.0], [48.8, 122.0], [48.9, 122.0], [49.0, 122.0], [49.1, 122.0], [49.2, 122.0], [49.3, 122.0], [49.4, 122.0], [49.5, 122.0], [49.6, 122.0], [49.7, 123.0], [49.8, 123.0], [49.9, 123.0], [50.0, 123.0], [50.1, 123.0], [50.2, 123.0], [50.3, 123.0], [50.4, 123.0], [50.5, 123.0], [50.6, 123.0], [50.7, 123.0], [50.8, 123.0], [50.9, 123.0], [51.0, 123.0], [51.1, 123.0], [51.2, 123.0], [51.3, 123.0], [51.4, 123.0], [51.5, 123.0], [51.6, 124.0], [51.7, 124.0], [51.8, 124.0], [51.9, 124.0], [52.0, 124.0], [52.1, 124.0], [52.2, 124.0], [52.3, 124.0], [52.4, 124.0], [52.5, 125.0], [52.6, 125.0], [52.7, 125.0], [52.8, 125.0], [52.9, 125.0], [53.0, 125.0], [53.1, 125.0], [53.2, 125.0], [53.3, 125.0], [53.4, 125.0], [53.5, 125.0], [53.6, 125.0], [53.7, 125.0], [53.8, 125.0], [53.9, 125.0], [54.0, 125.0], [54.1, 125.0], [54.2, 126.0], [54.3, 126.0], [54.4, 126.0], [54.5, 126.0], [54.6, 126.0], [54.7, 126.0], [54.8, 126.0], [54.9, 126.0], [55.0, 126.0], [55.1, 126.0], [55.2, 127.0], [55.3, 127.0], [55.4, 127.0], [55.5, 127.0], [55.6, 127.0], [55.7, 127.0], [55.8, 127.0], [55.9, 128.0], [56.0, 128.0], [56.1, 128.0], [56.2, 129.0], [56.3, 129.0], [56.4, 129.0], [56.5, 129.0], [56.6, 129.0], [56.7, 129.0], [56.8, 130.0], [56.9, 130.0], [57.0, 130.0], [57.1, 130.0], [57.2, 130.0], [57.3, 130.0], [57.4, 130.0], [57.5, 131.0], [57.6, 131.0], [57.7, 131.0], [57.8, 131.0], [57.9, 132.0], [58.0, 132.0], [58.1, 132.0], [58.2, 132.0], [58.3, 132.0], [58.4, 132.0], [58.5, 133.0], [58.6, 133.0], [58.7, 133.0], [58.8, 133.0], [58.9, 133.0], [59.0, 134.0], [59.1, 134.0], [59.2, 134.0], [59.3, 134.0], [59.4, 134.0], [59.5, 134.0], [59.6, 135.0], [59.7, 135.0], [59.8, 135.0], [59.9, 135.0], [60.0, 135.0], [60.1, 135.0], [60.2, 136.0], [60.3, 136.0], [60.4, 136.0], [60.5, 136.0], [60.6, 137.0], [60.7, 137.0], [60.8, 137.0], [60.9, 137.0], [61.0, 137.0], [61.1, 137.0], [61.2, 137.0], [61.3, 137.0], [61.4, 137.0], [61.5, 138.0], [61.6, 138.0], [61.7, 138.0], [61.8, 139.0], [61.9, 139.0], [62.0, 139.0], [62.1, 139.0], [62.2, 139.0], [62.3, 139.0], [62.4, 140.0], [62.5, 140.0], [62.6, 140.0], [62.7, 140.0], [62.8, 140.0], [62.9, 141.0], [63.0, 141.0], [63.1, 141.0], [63.2, 142.0], [63.3, 142.0], [63.4, 142.0], [63.5, 143.0], [63.6, 143.0], [63.7, 143.0], [63.8, 143.0], [63.9, 143.0], [64.0, 143.0], [64.1, 143.0], [64.2, 143.0], [64.3, 143.0], [64.4, 144.0], [64.5, 144.0], [64.6, 144.0], [64.7, 144.0], [64.8, 144.0], [64.9, 145.0], [65.0, 145.0], [65.1, 145.0], [65.2, 145.0], [65.3, 145.0], [65.4, 146.0], [65.5, 146.0], [65.6, 146.0], [65.7, 146.0], [65.8, 146.0], [65.9, 146.0], [66.0, 146.0], [66.1, 146.0], [66.2, 147.0], [66.3, 147.0], [66.4, 147.0], [66.5, 147.0], [66.6, 147.0], [66.7, 147.0], [66.8, 147.0], [66.9, 147.0], [67.0, 147.0], [67.1, 147.0], [67.2, 147.0], [67.3, 147.0], [67.4, 147.0], [67.5, 147.0], [67.6, 147.0], [67.7, 147.0], [67.8, 147.0], [67.9, 148.0], [68.0, 148.0], [68.1, 148.0], [68.2, 148.0], [68.3, 148.0], [68.4, 148.0], [68.5, 148.0], [68.6, 148.0], [68.7, 148.0], [68.8, 148.0], [68.9, 148.0], [69.0, 148.0], [69.1, 148.0], [69.2, 148.0], [69.3, 148.0], [69.4, 148.0], [69.5, 149.0], [69.6, 149.0], [69.7, 149.0], [69.8, 149.0], [69.9, 149.0], [70.0, 149.0], [70.1, 149.0], [70.2, 149.0], [70.3, 149.0], [70.4, 149.0], [70.5, 149.0], [70.6, 149.0], [70.7, 149.0], [70.8, 149.0], [70.9, 149.0], [71.0, 149.0], [71.1, 149.0], [71.2, 149.0], [71.3, 149.0], [71.4, 149.0], [71.5, 149.0], [71.6, 149.0], [71.7, 149.0], [71.8, 149.0], [71.9, 149.0], [72.0, 150.0], [72.1, 150.0], [72.2, 150.0], [72.3, 150.0], [72.4, 150.0], [72.5, 150.0], [72.6, 150.0], [72.7, 150.0], [72.8, 150.0], [72.9, 150.0], [73.0, 150.0], [73.1, 150.0], [73.2, 150.0], [73.3, 151.0], [73.4, 151.0], [73.5, 151.0], [73.6, 151.0], [73.7, 151.0], [73.8, 151.0], [73.9, 151.0], [74.0, 151.0], [74.1, 151.0], [74.2, 151.0], [74.3, 151.0], [74.4, 151.0], [74.5, 151.0], [74.6, 151.0], [74.7, 151.0], [74.8, 152.0], [74.9, 152.0], [75.0, 152.0], [75.1, 152.0], [75.2, 152.0], [75.3, 152.0], [75.4, 152.0], [75.5, 152.0], [75.6, 152.0], [75.7, 152.0], [75.8, 152.0], [75.9, 152.0], [76.0, 152.0], [76.1, 152.0], [76.2, 152.0], [76.3, 152.0], [76.4, 152.0], [76.5, 153.0], [76.6, 153.0], [76.7, 153.0], [76.8, 153.0], [76.9, 153.0], [77.0, 153.0], [77.1, 153.0], [77.2, 153.0], [77.3, 153.0], [77.4, 153.0], [77.5, 153.0], [77.6, 153.0], [77.7, 153.0], [77.8, 153.0], [77.9, 153.0], [78.0, 153.0], [78.1, 153.0], [78.2, 153.0], [78.3, 153.0], [78.4, 154.0], [78.5, 154.0], [78.6, 154.0], [78.7, 154.0], [78.8, 154.0], [78.9, 154.0], [79.0, 154.0], [79.1, 154.0], [79.2, 154.0], [79.3, 154.0], [79.4, 154.0], [79.5, 154.0], [79.6, 154.0], [79.7, 154.0], [79.8, 154.0], [79.9, 155.0], [80.0, 155.0], [80.1, 155.0], [80.2, 155.0], [80.3, 155.0], [80.4, 155.0], [80.5, 155.0], [80.6, 155.0], [80.7, 155.0], [80.8, 155.0], [80.9, 156.0], [81.0, 156.0], [81.1, 156.0], [81.2, 156.0], [81.3, 156.0], [81.4, 156.0], [81.5, 156.0], [81.6, 156.0], [81.7, 157.0], [81.8, 157.0], [81.9, 159.0], [82.0, 159.0], [82.1, 159.0], [82.2, 160.0], [82.3, 160.0], [82.4, 160.0], [82.5, 160.0], [82.6, 160.0], [82.7, 161.0], [82.8, 161.0], [82.9, 161.0], [83.0, 161.0], [83.1, 161.0], [83.2, 161.0], [83.3, 161.0], [83.4, 162.0], [83.5, 162.0], [83.6, 162.0], [83.7, 162.0], [83.8, 162.0], [83.9, 162.0], [84.0, 162.0], [84.1, 162.0], [84.2, 162.0], [84.3, 162.0], [84.4, 162.0], [84.5, 162.0], [84.6, 162.0], [84.7, 163.0], [84.8, 163.0], [84.9, 163.0], [85.0, 163.0], [85.1, 163.0], [85.2, 163.0], [85.3, 163.0], [85.4, 163.0], [85.5, 163.0], [85.6, 163.0], [85.7, 163.0], [85.8, 163.0], [85.9, 164.0], [86.0, 164.0], [86.1, 164.0], [86.2, 164.0], [86.3, 164.0], [86.4, 164.0], [86.5, 164.0], [86.6, 164.0], [86.7, 165.0], [86.8, 165.0], [86.9, 165.0], [87.0, 165.0], [87.1, 165.0], [87.2, 166.0], [87.3, 166.0], [87.4, 166.0], [87.5, 167.0], [87.6, 167.0], [87.7, 167.0], [87.8, 167.0], [87.9, 167.0], [88.0, 168.0], [88.1, 168.0], [88.2, 168.0], [88.3, 168.0], [88.4, 168.0], [88.5, 168.0], [88.6, 169.0], [88.7, 169.0], [88.8, 169.0], [88.9, 169.0], [89.0, 170.0], [89.1, 170.0], [89.2, 170.0], [89.3, 170.0], [89.4, 170.0], [89.5, 170.0], [89.6, 170.0], [89.7, 170.0], [89.8, 170.0], [89.9, 170.0], [90.0, 170.0], [90.1, 170.0], [90.2, 171.0], [90.3, 171.0], [90.4, 171.0], [90.5, 171.0], [90.6, 171.0], [90.7, 171.0], [90.8, 171.0], [90.9, 171.0], [91.0, 171.0], [91.1, 171.0], [91.2, 171.0], [91.3, 171.0], [91.4, 171.0], [91.5, 171.0], [91.6, 171.0], [91.7, 172.0], [91.8, 172.0], [91.9, 172.0], [92.0, 172.0], [92.1, 172.0], [92.2, 172.0], [92.3, 172.0], [92.4, 172.0], [92.5, 172.0], [92.6, 173.0], [92.7, 173.0], [92.8, 173.0], [92.9, 173.0], [93.0, 173.0], [93.1, 173.0], [93.2, 173.0], [93.3, 173.0], [93.4, 173.0], [93.5, 174.0], [93.6, 174.0], [93.7, 174.0], [93.8, 174.0], [93.9, 174.0], [94.0, 174.0], [94.1, 174.0], [94.2, 174.0], [94.3, 174.0], [94.4, 174.0], [94.5, 174.0], [94.6, 174.0], [94.7, 175.0], [94.8, 175.0], [94.9, 175.0], [95.0, 175.0], [95.1, 175.0], [95.2, 175.0], [95.3, 175.0], [95.4, 175.0], [95.5, 176.0], [95.6, 176.0], [95.7, 176.0], [95.8, 176.0], [95.9, 176.0], [96.0, 176.0], [96.1, 176.0], [96.2, 177.0], [96.3, 177.0], [96.4, 177.0], [96.5, 177.0], [96.6, 177.0], [96.7, 177.0], [96.8, 178.0], [96.9, 178.0], [97.0, 178.0], [97.1, 179.0], [97.2, 179.0], [97.3, 179.0], [97.4, 179.0], [97.5, 179.0], [97.6, 179.0], [97.7, 179.0], [97.8, 179.0], [97.9, 179.0], [98.0, 179.0], [98.1, 180.0], [98.2, 180.0], [98.3, 180.0], [98.4, 180.0], [98.5, 180.0], [98.6, 180.0], [98.7, 180.0], [98.8, 180.0], [98.9, 180.0], [99.0, 180.0], [99.1, 180.0], [99.2, 180.0], [99.3, 181.0], [99.4, 181.0], [99.5, 181.0], [99.6, 181.0], [99.7, 181.0], [99.8, 182.0], [99.9, 182.0], [100.0, 182.0]], "isOverall": false, "label": "simple", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 324.0, "minX": 0.0, "maxY": 676.0, "series": [{"data": [[0.0, 324.0], [100.0, 676.0]], "isOverall": false, "label": "simple", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1000.0, "series": [{"data": [[0.0, 1000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 66.02100000000016, "minX": 1.54936518E12, "maxY": 66.02100000000016, "series": [{"data": [[1.54936518E12, 66.02100000000016]], "isOverall": false, "label": "REST Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54936518E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 24.0, "minX": 1.0, "maxY": 165.3888888888889, "series": [{"data": [[2.0, 34.0], [3.0, 35.0], [4.0, 37.0], [5.0, 36.0], [6.0, 38.0], [7.0, 39.0], [8.0, 41.0], [9.0, 41.0], [10.0, 46.0], [11.0, 49.0], [12.0, 47.0], [13.0, 53.0], [14.0, 58.0], [15.0, 56.0], [16.0, 51.0], [17.0, 50.5], [18.0, 53.0], [19.0, 56.0], [20.0, 60.0], [21.0, 62.0], [22.0, 61.333333333333336], [23.0, 62.5], [24.0, 59.333333333333336], [25.0, 83.125], [26.0, 87.16666666666666], [27.0, 92.25], [28.0, 88.7], [29.0, 45.4], [30.0, 45.7], [31.0, 44.75], [32.0, 49.77777777777778], [33.0, 53.75], [34.0, 54.4], [35.0, 49.44444444444444], [36.0, 66.42857142857143], [37.0, 63.857142857142854], [38.0, 68.0], [39.0, 66.625], [40.0, 71.125], [41.0, 76.33333333333334], [42.0, 81.5], [43.0, 84.0], [44.0, 85.5], [45.0, 86.83333333333333], [46.0, 92.0], [47.0, 93.66666666666667], [48.0, 99.22222222222223], [49.0, 93.61538461538461], [50.0, 102.14285714285715], [51.0, 99.75], [52.0, 101.22222222222223], [53.0, 100.66666666666667], [54.0, 90.66666666666667], [55.0, 108.83333333333333], [56.0, 108.33333333333333], [57.0, 115.16666666666667], [58.0, 115.1111111111111], [59.0, 95.29411764705881], [60.0, 105.91666666666666], [61.0, 95.07692307692307], [62.0, 104.29411764705883], [63.0, 94.69999999999999], [64.0, 104.76470588235294], [65.0, 133.73684210526315], [66.0, 161.14285714285714], [67.0, 165.3888888888889], [68.0, 153.0666666666667], [69.0, 155.7297297297297], [70.0, 114.43750000000001], [71.0, 115.82352941176472], [72.0, 128.99999999999997], [73.0, 152.53658536585365], [74.0, 159.62068965517236], [75.0, 118.0], [76.0, 113.45454545454545], [77.0, 148.42857142857142], [78.0, 125.72727272727273], [79.0, 120.625], [80.0, 142.74999999999997], [81.0, 110.0], [82.0, 125.45454545454545], [83.0, 143.54545454545456], [84.0, 126.0], [85.0, 131.66666666666666], [86.0, 135.11111111111114], [87.0, 146.66666666666666], [88.0, 140.74999999999997], [89.0, 135.42857142857144], [90.0, 143.83333333333331], [91.0, 148.33333333333334], [92.0, 149.79999999999998], [93.0, 150.60000000000002], [94.0, 151.33333333333334], [95.0, 153.625], [96.0, 155.35714285714286], [97.0, 155.83333333333331], [98.0, 153.57142857142858], [99.0, 151.66666666666666], [100.0, 153.469387755102], [1.0, 24.0]], "isOverall": false, "label": "simple", "isController": false}, {"data": [[66.02100000000016, 118.35000000000014]], "isOverall": false, "label": "simple-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2500.0, "minX": 1.54936518E12, "maxY": 3766.6666666666665, "series": [{"data": [[1.54936518E12, 3766.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.54936518E12, 2500.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54936518E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 118.35000000000014, "minX": 1.54936518E12, "maxY": 118.35000000000014, "series": [{"data": [[1.54936518E12, 118.35000000000014]], "isOverall": false, "label": "simple", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54936518E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 118.309, "minX": 1.54936518E12, "maxY": 118.309, "series": [{"data": [[1.54936518E12, 118.309]], "isOverall": false, "label": "simple", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54936518E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.970000000000001, "minX": 1.54936518E12, "maxY": 1.970000000000001, "series": [{"data": [[1.54936518E12, 1.970000000000001]], "isOverall": false, "label": "simple", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54936518E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 24.0, "minX": 1.54936518E12, "maxY": 182.0, "series": [{"data": [[1.54936518E12, 182.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.54936518E12, 24.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.54936518E12, 170.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.54936518E12, 180.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.54936518E12, 175.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54936518E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 54.0, "minX": 1000.0, "maxY": 125.0, "series": [{"data": [[5000.0, 102.0], [3000.0, 54.0], [1000.0, 125.0], [2000.0, 110.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 5000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 54.0, "minX": 1000.0, "maxY": 124.5, "series": [{"data": [[5000.0, 102.0], [3000.0, 54.0], [1000.0, 124.5], [2000.0, 110.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 5000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.54936518E12, "maxY": 16.666666666666668, "series": [{"data": [[1.54936518E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54936518E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.54936518E12, "maxY": 16.666666666666668, "series": [{"data": [[1.54936518E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54936518E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.54936518E12, "maxY": 16.666666666666668, "series": [{"data": [[1.54936518E12, 16.666666666666668]], "isOverall": false, "label": "simple-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54936518E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.54936518E12, "maxY": 16.666666666666668, "series": [{"data": [[1.54936518E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54936518E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

