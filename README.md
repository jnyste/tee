# Tee
Green Tea-styled standalone troubleshooting tool on Node.js built during the 2018 Visma Consulting Tampere Hackathon "Le Manse". Very quick, very crude.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
If running the enclosed Vagrant Debian machine, install Vagrant with Virtualbox, guide at https://www.vagrantup.com/docs/installation/

If intending to run the application from your own machine, `node.js` with `npm` is required.

### Installing
On Vagrant, browse into the /tee folder with Vagrantfile and run
`vagrant up`
This will automatically provision the machine, run shell scripts to install node.js and the application, and then open ports at 8080 and 8090, of which 8090 directly connects to the application frontend (3000 on machine) while 8080 has application backend on Express.

## Contributing and License
Please contact before touching anything. See LICENSE for the MIT license.

## Authors
- aggums
- fippe / J. Salonen
