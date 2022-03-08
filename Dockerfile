# image:version
FROM node:14.19.0

# User will execute
USER node

# Directory where work
WORKDIR /home/node/app

# Command to loop running
CMD ["tail", "-f", "/dev/null"]
