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
        data: {"result": {"minY": 18.0, "minX": 0.0, "maxY": 161.0, "series": [{"data": [[0.0, 18.0], [0.1, 18.0], [0.2, 19.0], [0.3, 19.0], [0.4, 23.0], [0.5, 24.0], [0.6, 24.0], [0.7, 24.0], [0.8, 25.0], [0.9, 25.0], [1.0, 26.0], [1.1, 27.0], [1.2, 27.0], [1.3, 27.0], [1.4, 27.0], [1.5, 28.0], [1.6, 29.0], [1.7, 29.0], [1.8, 31.0], [1.9, 31.0], [2.0, 33.0], [2.1, 33.0], [2.2, 34.0], [2.3, 34.0], [2.4, 35.0], [2.5, 35.0], [2.6, 36.0], [2.7, 36.0], [2.8, 37.0], [2.9, 37.0], [3.0, 38.0], [3.1, 38.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 40.0], [3.7, 40.0], [3.8, 41.0], [3.9, 42.0], [4.0, 42.0], [4.1, 43.0], [4.2, 44.0], [4.3, 44.0], [4.4, 46.0], [4.5, 46.0], [4.6, 46.0], [4.7, 48.0], [4.8, 49.0], [4.9, 49.0], [5.0, 51.0], [5.1, 53.0], [5.2, 54.0], [5.3, 54.0], [5.4, 54.0], [5.5, 55.0], [5.6, 55.0], [5.7, 56.0], [5.8, 57.0], [5.9, 57.0], [6.0, 58.0], [6.1, 58.0], [6.2, 59.0], [6.3, 62.0], [6.4, 62.0], [6.5, 63.0], [6.6, 63.0], [6.7, 63.0], [6.8, 64.0], [6.9, 64.0], [7.0, 64.0], [7.1, 64.0], [7.2, 64.0], [7.3, 64.0], [7.4, 64.0], [7.5, 65.0], [7.6, 65.0], [7.7, 65.0], [7.8, 65.0], [7.9, 66.0], [8.0, 66.0], [8.1, 66.0], [8.2, 67.0], [8.3, 67.0], [8.4, 67.0], [8.5, 67.0], [8.6, 68.0], [8.7, 68.0], [8.8, 68.0], [8.9, 68.0], [9.0, 68.0], [9.1, 68.0], [9.2, 69.0], [9.3, 69.0], [9.4, 69.0], [9.5, 69.0], [9.6, 69.0], [9.7, 69.0], [9.8, 69.0], [9.9, 69.0], [10.0, 69.0], [10.1, 69.0], [10.2, 69.0], [10.3, 69.0], [10.4, 69.0], [10.5, 69.0], [10.6, 69.0], [10.7, 69.0], [10.8, 69.0], [10.9, 70.0], [11.0, 70.0], [11.1, 70.0], [11.2, 70.0], [11.3, 70.0], [11.4, 70.0], [11.5, 70.0], [11.6, 70.0], [11.7, 70.0], [11.8, 70.0], [11.9, 70.0], [12.0, 70.0], [12.1, 70.0], [12.2, 70.0], [12.3, 71.0], [12.4, 71.0], [12.5, 71.0], [12.6, 71.0], [12.7, 71.0], [12.8, 71.0], [12.9, 71.0], [13.0, 71.0], [13.1, 71.0], [13.2, 71.0], [13.3, 71.0], [13.4, 72.0], [13.5, 72.0], [13.6, 72.0], [13.7, 72.0], [13.8, 72.0], [13.9, 72.0], [14.0, 72.0], [14.1, 72.0], [14.2, 72.0], [14.3, 73.0], [14.4, 73.0], [14.5, 73.0], [14.6, 73.0], [14.7, 73.0], [14.8, 73.0], [14.9, 73.0], [15.0, 73.0], [15.1, 74.0], [15.2, 74.0], [15.3, 74.0], [15.4, 74.0], [15.5, 74.0], [15.6, 74.0], [15.7, 74.0], [15.8, 74.0], [15.9, 74.0], [16.0, 74.0], [16.1, 74.0], [16.2, 74.0], [16.3, 74.0], [16.4, 74.0], [16.5, 74.0], [16.6, 74.0], [16.7, 75.0], [16.8, 75.0], [16.9, 75.0], [17.0, 75.0], [17.1, 75.0], [17.2, 76.0], [17.3, 76.0], [17.4, 76.0], [17.5, 76.0], [17.6, 76.0], [17.7, 76.0], [17.8, 76.0], [17.9, 77.0], [18.0, 77.0], [18.1, 77.0], [18.2, 77.0], [18.3, 77.0], [18.4, 77.0], [18.5, 77.0], [18.6, 77.0], [18.7, 77.0], [18.8, 78.0], [18.9, 79.0], [19.0, 79.0], [19.1, 79.0], [19.2, 80.0], [19.3, 80.0], [19.4, 80.0], [19.5, 80.0], [19.6, 80.0], [19.7, 80.0], [19.8, 80.0], [19.9, 81.0], [20.0, 81.0], [20.1, 81.0], [20.2, 81.0], [20.3, 81.0], [20.4, 82.0], [20.5, 82.0], [20.6, 82.0], [20.7, 82.0], [20.8, 82.0], [20.9, 83.0], [21.0, 83.0], [21.1, 83.0], [21.2, 84.0], [21.3, 84.0], [21.4, 84.0], [21.5, 84.0], [21.6, 84.0], [21.7, 84.0], [21.8, 84.0], [21.9, 85.0], [22.0, 85.0], [22.1, 85.0], [22.2, 85.0], [22.3, 85.0], [22.4, 85.0], [22.5, 86.0], [22.6, 86.0], [22.7, 86.0], [22.8, 86.0], [22.9, 86.0], [23.0, 86.0], [23.1, 86.0], [23.2, 86.0], [23.3, 86.0], [23.4, 86.0], [23.5, 86.0], [23.6, 86.0], [23.7, 86.0], [23.8, 86.0], [23.9, 87.0], [24.0, 87.0], [24.1, 87.0], [24.2, 87.0], [24.3, 87.0], [24.4, 87.0], [24.5, 87.0], [24.6, 87.0], [24.7, 87.0], [24.8, 87.0], [24.9, 87.0], [25.0, 87.0], [25.1, 88.0], [25.2, 88.0], [25.3, 88.0], [25.4, 88.0], [25.5, 88.0], [25.6, 88.0], [25.7, 88.0], [25.8, 88.0], [25.9, 88.0], [26.0, 88.0], [26.1, 89.0], [26.2, 89.0], [26.3, 89.0], [26.4, 89.0], [26.5, 89.0], [26.6, 89.0], [26.7, 89.0], [26.8, 89.0], [26.9, 89.0], [27.0, 90.0], [27.1, 90.0], [27.2, 91.0], [27.3, 91.0], [27.4, 91.0], [27.5, 91.0], [27.6, 91.0], [27.7, 91.0], [27.8, 91.0], [27.9, 92.0], [28.0, 92.0], [28.1, 92.0], [28.2, 92.0], [28.3, 92.0], [28.4, 92.0], [28.5, 92.0], [28.6, 92.0], [28.7, 92.0], [28.8, 92.0], [28.9, 92.0], [29.0, 92.0], [29.1, 93.0], [29.2, 93.0], [29.3, 93.0], [29.4, 93.0], [29.5, 93.0], [29.6, 93.0], [29.7, 93.0], [29.8, 93.0], [29.9, 93.0], [30.0, 93.0], [30.1, 94.0], [30.2, 94.0], [30.3, 94.0], [30.4, 94.0], [30.5, 94.0], [30.6, 94.0], [30.7, 94.0], [30.8, 94.0], [30.9, 94.0], [31.0, 94.0], [31.1, 95.0], [31.2, 95.0], [31.3, 95.0], [31.4, 95.0], [31.5, 95.0], [31.6, 96.0], [31.7, 96.0], [31.8, 96.0], [31.9, 97.0], [32.0, 97.0], [32.1, 97.0], [32.2, 98.0], [32.3, 98.0], [32.4, 98.0], [32.5, 98.0], [32.6, 98.0], [32.7, 98.0], [32.8, 98.0], [32.9, 98.0], [33.0, 98.0], [33.1, 99.0], [33.2, 100.0], [33.3, 102.0], [33.4, 103.0], [33.5, 104.0], [33.6, 106.0], [33.7, 106.0], [33.8, 106.0], [33.9, 107.0], [34.0, 107.0], [34.1, 108.0], [34.2, 108.0], [34.3, 108.0], [34.4, 108.0], [34.5, 109.0], [34.6, 109.0], [34.7, 109.0], [34.8, 109.0], [34.9, 111.0], [35.0, 111.0], [35.1, 112.0], [35.2, 112.0], [35.3, 112.0], [35.4, 112.0], [35.5, 113.0], [35.6, 113.0], [35.7, 113.0], [35.8, 113.0], [35.9, 113.0], [36.0, 113.0], [36.1, 113.0], [36.2, 113.0], [36.3, 113.0], [36.4, 113.0], [36.5, 113.0], [36.6, 114.0], [36.7, 114.0], [36.8, 114.0], [36.9, 114.0], [37.0, 114.0], [37.1, 114.0], [37.2, 114.0], [37.3, 115.0], [37.4, 115.0], [37.5, 115.0], [37.6, 116.0], [37.7, 116.0], [37.8, 116.0], [37.9, 116.0], [38.0, 116.0], [38.1, 116.0], [38.2, 116.0], [38.3, 116.0], [38.4, 117.0], [38.5, 117.0], [38.6, 118.0], [38.7, 118.0], [38.8, 118.0], [38.9, 118.0], [39.0, 118.0], [39.1, 118.0], [39.2, 119.0], [39.3, 119.0], [39.4, 119.0], [39.5, 119.0], [39.6, 119.0], [39.7, 120.0], [39.8, 120.0], [39.9, 120.0], [40.0, 120.0], [40.1, 120.0], [40.2, 120.0], [40.3, 120.0], [40.4, 120.0], [40.5, 120.0], [40.6, 120.0], [40.7, 120.0], [40.8, 120.0], [40.9, 120.0], [41.0, 120.0], [41.1, 120.0], [41.2, 120.0], [41.3, 120.0], [41.4, 120.0], [41.5, 120.0], [41.6, 120.0], [41.7, 121.0], [41.8, 121.0], [41.9, 121.0], [42.0, 121.0], [42.1, 121.0], [42.2, 121.0], [42.3, 121.0], [42.4, 121.0], [42.5, 121.0], [42.6, 121.0], [42.7, 121.0], [42.8, 121.0], [42.9, 121.0], [43.0, 121.0], [43.1, 122.0], [43.2, 122.0], [43.3, 122.0], [43.4, 122.0], [43.5, 122.0], [43.6, 122.0], [43.7, 122.0], [43.8, 122.0], [43.9, 122.0], [44.0, 122.0], [44.1, 122.0], [44.2, 122.0], [44.3, 122.0], [44.4, 122.0], [44.5, 122.0], [44.6, 123.0], [44.7, 123.0], [44.8, 123.0], [44.9, 123.0], [45.0, 123.0], [45.1, 123.0], [45.2, 123.0], [45.3, 123.0], [45.4, 123.0], [45.5, 123.0], [45.6, 123.0], [45.7, 123.0], [45.8, 123.0], [45.9, 124.0], [46.0, 124.0], [46.1, 124.0], [46.2, 124.0], [46.3, 124.0], [46.4, 124.0], [46.5, 124.0], [46.6, 124.0], [46.7, 124.0], [46.8, 124.0], [46.9, 124.0], [47.0, 124.0], [47.1, 124.0], [47.2, 124.0], [47.3, 124.0], [47.4, 125.0], [47.5, 125.0], [47.6, 125.0], [47.7, 125.0], [47.8, 125.0], [47.9, 125.0], [48.0, 125.0], [48.1, 125.0], [48.2, 125.0], [48.3, 125.0], [48.4, 125.0], [48.5, 125.0], [48.6, 126.0], [48.7, 126.0], [48.8, 126.0], [48.9, 126.0], [49.0, 126.0], [49.1, 126.0], [49.2, 126.0], [49.3, 126.0], [49.4, 126.0], [49.5, 126.0], [49.6, 126.0], [49.7, 126.0], [49.8, 126.0], [49.9, 126.0], [50.0, 127.0], [50.1, 127.0], [50.2, 127.0], [50.3, 127.0], [50.4, 127.0], [50.5, 127.0], [50.6, 127.0], [50.7, 127.0], [50.8, 127.0], [50.9, 127.0], [51.0, 127.0], [51.1, 127.0], [51.2, 127.0], [51.3, 128.0], [51.4, 128.0], [51.5, 128.0], [51.6, 128.0], [51.7, 128.0], [51.8, 128.0], [51.9, 128.0], [52.0, 128.0], [52.1, 128.0], [52.2, 128.0], [52.3, 128.0], [52.4, 128.0], [52.5, 128.0], [52.6, 128.0], [52.7, 129.0], [52.8, 129.0], [52.9, 129.0], [53.0, 129.0], [53.1, 129.0], [53.2, 129.0], [53.3, 129.0], [53.4, 129.0], [53.5, 129.0], [53.6, 129.0], [53.7, 129.0], [53.8, 129.0], [53.9, 129.0], [54.0, 129.0], [54.1, 130.0], [54.2, 130.0], [54.3, 130.0], [54.4, 130.0], [54.5, 130.0], [54.6, 130.0], [54.7, 130.0], [54.8, 130.0], [54.9, 130.0], [55.0, 130.0], [55.1, 130.0], [55.2, 130.0], [55.3, 130.0], [55.4, 130.0], [55.5, 130.0], [55.6, 130.0], [55.7, 130.0], [55.8, 130.0], [55.9, 130.0], [56.0, 130.0], [56.1, 130.0], [56.2, 130.0], [56.3, 130.0], [56.4, 130.0], [56.5, 130.0], [56.6, 130.0], [56.7, 130.0], [56.8, 131.0], [56.9, 131.0], [57.0, 131.0], [57.1, 131.0], [57.2, 131.0], [57.3, 131.0], [57.4, 131.0], [57.5, 131.0], [57.6, 131.0], [57.7, 131.0], [57.8, 131.0], [57.9, 131.0], [58.0, 131.0], [58.1, 131.0], [58.2, 131.0], [58.3, 131.0], [58.4, 131.0], [58.5, 131.0], [58.6, 131.0], [58.7, 131.0], [58.8, 131.0], [58.9, 131.0], [59.0, 131.0], [59.1, 131.0], [59.2, 131.0], [59.3, 131.0], [59.4, 132.0], [59.5, 132.0], [59.6, 132.0], [59.7, 132.0], [59.8, 132.0], [59.9, 132.0], [60.0, 132.0], [60.1, 132.0], [60.2, 132.0], [60.3, 132.0], [60.4, 132.0], [60.5, 132.0], [60.6, 132.0], [60.7, 132.0], [60.8, 132.0], [60.9, 132.0], [61.0, 132.0], [61.1, 132.0], [61.2, 132.0], [61.3, 132.0], [61.4, 132.0], [61.5, 132.0], [61.6, 132.0], [61.7, 132.0], [61.8, 132.0], [61.9, 132.0], [62.0, 132.0], [62.1, 132.0], [62.2, 132.0], [62.3, 132.0], [62.4, 132.0], [62.5, 132.0], [62.6, 133.0], [62.7, 133.0], [62.8, 133.0], [62.9, 133.0], [63.0, 133.0], [63.1, 133.0], [63.2, 133.0], [63.3, 133.0], [63.4, 133.0], [63.5, 133.0], [63.6, 133.0], [63.7, 133.0], [63.8, 133.0], [63.9, 133.0], [64.0, 133.0], [64.1, 133.0], [64.2, 133.0], [64.3, 133.0], [64.4, 133.0], [64.5, 133.0], [64.6, 133.0], [64.7, 133.0], [64.8, 133.0], [64.9, 133.0], [65.0, 133.0], [65.1, 134.0], [65.2, 134.0], [65.3, 134.0], [65.4, 134.0], [65.5, 134.0], [65.6, 134.0], [65.7, 134.0], [65.8, 134.0], [65.9, 134.0], [66.0, 134.0], [66.1, 134.0], [66.2, 134.0], [66.3, 134.0], [66.4, 134.0], [66.5, 134.0], [66.6, 134.0], [66.7, 134.0], [66.8, 134.0], [66.9, 134.0], [67.0, 134.0], [67.1, 134.0], [67.2, 134.0], [67.3, 134.0], [67.4, 134.0], [67.5, 134.0], [67.6, 134.0], [67.7, 134.0], [67.8, 134.0], [67.9, 135.0], [68.0, 135.0], [68.1, 135.0], [68.2, 135.0], [68.3, 135.0], [68.4, 135.0], [68.5, 135.0], [68.6, 135.0], [68.7, 135.0], [68.8, 135.0], [68.9, 135.0], [69.0, 135.0], [69.1, 135.0], [69.2, 135.0], [69.3, 135.0], [69.4, 135.0], [69.5, 135.0], [69.6, 135.0], [69.7, 135.0], [69.8, 135.0], [69.9, 135.0], [70.0, 135.0], [70.1, 135.0], [70.2, 136.0], [70.3, 136.0], [70.4, 136.0], [70.5, 136.0], [70.6, 136.0], [70.7, 136.0], [70.8, 136.0], [70.9, 136.0], [71.0, 136.0], [71.1, 136.0], [71.2, 136.0], [71.3, 136.0], [71.4, 136.0], [71.5, 136.0], [71.6, 136.0], [71.7, 136.0], [71.8, 136.0], [71.9, 136.0], [72.0, 136.0], [72.1, 136.0], [72.2, 136.0], [72.3, 136.0], [72.4, 136.0], [72.5, 137.0], [72.6, 137.0], [72.7, 137.0], [72.8, 137.0], [72.9, 137.0], [73.0, 137.0], [73.1, 137.0], [73.2, 137.0], [73.3, 137.0], [73.4, 137.0], [73.5, 137.0], [73.6, 137.0], [73.7, 137.0], [73.8, 137.0], [73.9, 137.0], [74.0, 137.0], [74.1, 137.0], [74.2, 137.0], [74.3, 137.0], [74.4, 137.0], [74.5, 137.0], [74.6, 137.0], [74.7, 137.0], [74.8, 137.0], [74.9, 137.0], [75.0, 137.0], [75.1, 137.0], [75.2, 137.0], [75.3, 137.0], [75.4, 138.0], [75.5, 138.0], [75.6, 138.0], [75.7, 138.0], [75.8, 138.0], [75.9, 138.0], [76.0, 138.0], [76.1, 138.0], [76.2, 138.0], [76.3, 138.0], [76.4, 138.0], [76.5, 138.0], [76.6, 138.0], [76.7, 138.0], [76.8, 138.0], [76.9, 138.0], [77.0, 138.0], [77.1, 138.0], [77.2, 138.0], [77.3, 138.0], [77.4, 138.0], [77.5, 138.0], [77.6, 138.0], [77.7, 138.0], [77.8, 138.0], [77.9, 138.0], [78.0, 139.0], [78.1, 139.0], [78.2, 139.0], [78.3, 139.0], [78.4, 139.0], [78.5, 139.0], [78.6, 139.0], [78.7, 139.0], [78.8, 139.0], [78.9, 139.0], [79.0, 139.0], [79.1, 139.0], [79.2, 139.0], [79.3, 139.0], [79.4, 139.0], [79.5, 139.0], [79.6, 139.0], [79.7, 139.0], [79.8, 139.0], [79.9, 139.0], [80.0, 139.0], [80.1, 139.0], [80.2, 140.0], [80.3, 140.0], [80.4, 140.0], [80.5, 140.0], [80.6, 140.0], [80.7, 140.0], [80.8, 140.0], [80.9, 140.0], [81.0, 140.0], [81.1, 140.0], [81.2, 140.0], [81.3, 140.0], [81.4, 140.0], [81.5, 141.0], [81.6, 141.0], [81.7, 141.0], [81.8, 141.0], [81.9, 141.0], [82.0, 141.0], [82.1, 141.0], [82.2, 141.0], [82.3, 141.0], [82.4, 141.0], [82.5, 141.0], [82.6, 141.0], [82.7, 141.0], [82.8, 141.0], [82.9, 141.0], [83.0, 141.0], [83.1, 141.0], [83.2, 141.0], [83.3, 141.0], [83.4, 141.0], [83.5, 142.0], [83.6, 142.0], [83.7, 142.0], [83.8, 142.0], [83.9, 142.0], [84.0, 142.0], [84.1, 142.0], [84.2, 142.0], [84.3, 142.0], [84.4, 142.0], [84.5, 142.0], [84.6, 142.0], [84.7, 142.0], [84.8, 142.0], [84.9, 142.0], [85.0, 142.0], [85.1, 142.0], [85.2, 142.0], [85.3, 142.0], [85.4, 142.0], [85.5, 142.0], [85.6, 142.0], [85.7, 143.0], [85.8, 143.0], [85.9, 143.0], [86.0, 143.0], [86.1, 143.0], [86.2, 143.0], [86.3, 143.0], [86.4, 143.0], [86.5, 143.0], [86.6, 143.0], [86.7, 143.0], [86.8, 143.0], [86.9, 143.0], [87.0, 143.0], [87.1, 143.0], [87.2, 143.0], [87.3, 143.0], [87.4, 143.0], [87.5, 143.0], [87.6, 144.0], [87.7, 144.0], [87.8, 144.0], [87.9, 144.0], [88.0, 144.0], [88.1, 144.0], [88.2, 144.0], [88.3, 144.0], [88.4, 144.0], [88.5, 144.0], [88.6, 144.0], [88.7, 144.0], [88.8, 144.0], [88.9, 145.0], [89.0, 145.0], [89.1, 145.0], [89.2, 145.0], [89.3, 145.0], [89.4, 146.0], [89.5, 146.0], [89.6, 146.0], [89.7, 146.0], [89.8, 146.0], [89.9, 147.0], [90.0, 148.0], [90.1, 148.0], [90.2, 148.0], [90.3, 148.0], [90.4, 149.0], [90.5, 149.0], [90.6, 149.0], [90.7, 149.0], [90.8, 149.0], [90.9, 149.0], [91.0, 149.0], [91.1, 149.0], [91.2, 149.0], [91.3, 149.0], [91.4, 150.0], [91.5, 150.0], [91.6, 150.0], [91.7, 150.0], [91.8, 150.0], [91.9, 150.0], [92.0, 151.0], [92.1, 151.0], [92.2, 151.0], [92.3, 151.0], [92.4, 152.0], [92.5, 152.0], [92.6, 152.0], [92.7, 152.0], [92.8, 153.0], [92.9, 153.0], [93.0, 153.0], [93.1, 153.0], [93.2, 153.0], [93.3, 153.0], [93.4, 153.0], [93.5, 153.0], [93.6, 153.0], [93.7, 153.0], [93.8, 153.0], [93.9, 154.0], [94.0, 154.0], [94.1, 154.0], [94.2, 154.0], [94.3, 154.0], [94.4, 154.0], [94.5, 154.0], [94.6, 154.0], [94.7, 155.0], [94.8, 155.0], [94.9, 155.0], [95.0, 155.0], [95.1, 156.0], [95.2, 156.0], [95.3, 156.0], [95.4, 156.0], [95.5, 156.0], [95.6, 157.0], [95.7, 157.0], [95.8, 157.0], [95.9, 157.0], [96.0, 157.0], [96.1, 157.0], [96.2, 157.0], [96.3, 158.0], [96.4, 159.0], [96.5, 159.0], [96.6, 159.0], [96.7, 160.0], [96.8, 160.0], [96.9, 160.0], [97.0, 160.0], [97.1, 160.0], [97.2, 160.0], [97.3, 160.0], [97.4, 160.0], [97.5, 160.0], [97.6, 160.0], [97.7, 160.0], [97.8, 160.0], [97.9, 160.0], [98.0, 160.0], [98.1, 160.0], [98.2, 160.0], [98.3, 161.0], [98.4, 161.0], [98.5, 161.0], [98.6, 161.0], [98.7, 161.0], [98.8, 161.0], [98.9, 161.0], [99.0, 161.0], [99.1, 161.0], [99.2, 161.0], [99.3, 161.0], [99.4, 161.0], [99.5, 161.0], [99.6, 161.0], [99.7, 161.0], [99.8, 161.0], [99.9, 161.0]], "isOverall": false, "label": "simple", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 332.0, "minX": 0.0, "maxY": 668.0, "series": [{"data": [[0.0, 332.0], [100.0, 668.0]], "isOverall": false, "label": "simple", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 67.63400000000003, "minX": 1.5493641E12, "maxY": 67.63400000000003, "series": [{"data": [[1.5493641E12, 67.63400000000003]], "isOverall": false, "label": "REST Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5493641E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.0, "maxY": 152.0, "series": [{"data": [[2.0, 27.0], [3.0, 25.0], [6.0, 25.0], [9.0, 20.0], [10.0, 23.0], [11.0, 24.0], [12.0, 24.0], [13.0, 26.0], [14.0, 27.333333333333332], [15.0, 28.5], [16.0, 34.5], [17.0, 36.5], [18.0, 37.5], [19.0, 40.25], [20.0, 43.0], [21.0, 46.0], [22.0, 48.0], [23.0, 51.0], [24.0, 54.0], [25.0, 56.5], [26.0, 62.333333333333336], [27.0, 64.75], [28.0, 65.0], [29.0, 90.18750000000001], [30.0, 103.2], [31.0, 105.8], [32.0, 83.5], [33.0, 45.12500000000001], [34.0, 50.9], [35.0, 72.0909090909091], [36.0, 73.4], [37.0, 75.28571428571429], [38.0, 84.66666666666667], [39.0, 77.36363636363635], [40.0, 74.92307692307692], [41.0, 78.28571428571429], [42.0, 79.0], [43.0, 72.4], [44.0, 74.85714285714286], [45.0, 73.0], [46.0, 72.58333333333333], [47.0, 75.11111111111111], [48.0, 77.57142857142857], [49.0, 79.55555555555556], [50.0, 78.10000000000001], [51.0, 79.89999999999999], [52.0, 79.28571428571428], [53.0, 86.25], [54.0, 85.125], [55.0, 83.5], [56.0, 104.45454545454545], [57.0, 96.75], [58.0, 103.6], [59.0, 100.0], [60.0, 106.13333333333334], [61.0, 107.36842105263156], [62.0, 126.625], [63.0, 122.2272727272727], [64.0, 131.0625], [65.0, 132.78571428571428], [66.0, 139.16666666666669], [67.0, 142.46153846153848], [68.0, 137.78571428571428], [69.0, 127.93749999999999], [70.0, 123.58536585365854], [71.0, 129.39999999999998], [72.0, 124.77777777777777], [73.0, 124.80000000000001], [74.0, 130.47826086956522], [75.0, 119.42857142857143], [76.0, 127.08333333333334], [79.0, 136.5], [78.0, 141.16666666666666], [77.0, 138.0], [80.0, 134.5], [81.0, 135.2], [82.0, 135.0909090909091], [83.0, 137.0909090909091], [84.0, 139.33333333333334], [85.0, 143.0], [86.0, 137.11111111111111], [87.0, 142.5], [88.0, 148.55555555555554], [89.0, 151.8888888888889], [90.0, 152.0], [91.0, 130.0], [92.0, 135.5], [93.0, 139.16666666666669], [94.0, 136.0], [95.0, 134.4], [96.0, 137.5], [97.0, 138.41666666666663], [98.0, 144.83333333333334], [99.0, 143.75], [100.0, 141.8164556962025], [1.0, 29.0]], "isOverall": false, "label": "simple", "isController": false}, {"data": [[67.63400000000003, 113.8789999999999]], "isOverall": false, "label": "simple-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2500.0, "minX": 1.5493641E12, "maxY": 4066.6666666666665, "series": [{"data": [[1.5493641E12, 4066.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5493641E12, 2500.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5493641E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 113.8789999999999, "minX": 1.5493641E12, "maxY": 113.8789999999999, "series": [{"data": [[1.5493641E12, 113.8789999999999]], "isOverall": false, "label": "simple", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5493641E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 113.83299999999988, "minX": 1.5493641E12, "maxY": 113.83299999999988, "series": [{"data": [[1.5493641E12, 113.83299999999988]], "isOverall": false, "label": "simple", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5493641E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.245999999999998, "minX": 1.5493641E12, "maxY": 2.245999999999998, "series": [{"data": [[1.5493641E12, 2.245999999999998]], "isOverall": false, "label": "simple", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5493641E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.5493641E12, "maxY": 161.0, "series": [{"data": [[1.5493641E12, 161.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5493641E12, 18.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5493641E12, 147.89999999999998]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5493641E12, 161.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5493641E12, 155.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5493641E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 80.0, "minX": 1000.0, "maxY": 127.5, "series": [{"data": [[3000.0, 85.0], [7000.0, 80.0], [1000.0, 127.0], [2000.0, 127.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 7000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 79.0, "minX": 1000.0, "maxY": 127.5, "series": [{"data": [[3000.0, 85.0], [7000.0, 79.0], [1000.0, 127.0], [2000.0, 127.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 7000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.5493641E12, "maxY": 16.666666666666668, "series": [{"data": [[1.5493641E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5493641E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.5493641E12, "maxY": 16.666666666666668, "series": [{"data": [[1.5493641E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5493641E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.5493641E12, "maxY": 16.666666666666668, "series": [{"data": [[1.5493641E12, 16.666666666666668]], "isOverall": false, "label": "simple-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5493641E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.5493641E12, "maxY": 16.666666666666668, "series": [{"data": [[1.5493641E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5493641E12, "title": "Total Transactions Per Second"}},
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

