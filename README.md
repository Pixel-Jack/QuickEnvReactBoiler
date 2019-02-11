# QuickEnv for React BoilerPlate
Based upon [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)

## Adapt for your projet
Search for these terms and adapt the code with what you want: (case insensitive)
- YOUR_PROJECT

## Guideline first install
1. Finish this document
2. Read this [one](CONTRIBUTING.md)
3. Then run 
```bash
make settings
vim .env
```
4. Fill this file with your settings.
5. Run ```make```

If you are in dev mode a server will be launch at localhost:3000.
Otherwise, this will create repo of static files in the container at the address /app/build/react. And since /app/build is an external mounted volume react/ will be shared on this volume. Once the creation is over the container will stop.

## Architecture
See the whole architecture scheme [here](docs/architecture.md).
