# cutie

PORT=8080 node src/simple_request_response_app/cuties/example.js
./../apache-jmeter-5.0/bin/jmeter -n -t src/simple_request_response_app/test-script.jmx -l src/simple_request_response_app/cuties/res -e -o src/simple_request_response_app/cuties/report

# express

PORT=8080 node src/simple_request_response_app/express/example.js
./../apache-jmeter-5.0/bin/jmeter -n -t src/simple_request_response_app/test-script.jmx -l src/simple_request_response_app/express/res -e -o src/simple_request_response_app/express/report

# pure

PORT=8080 node src/simple_request_response_app/pure/example.js
./../apache-jmeter-5.0/bin/jmeter -n -t src/simple_request_response_app/test-script.jmx -l src/simple_request_response_app/pure/res -e -o src/simple_request_response_app/pure/report

#hapi

PORT=8080 node src/simple_request_response_app/hapi/example.js
./../apache-jmeter-5.0/bin/jmeter -n -t src/simple_request_response_app/test-script.jmx -l src/simple_request_response_app/hapi/res -e -o src/simple_request_response_app/hapi/report
