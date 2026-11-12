# FreshMart Storefront

A responsive mini grocery storefront built with HTML, CSS and JavaScript. Includes product cards, category filters, search and a demo basket counter.

## Build image
```bash
docker build -t YOUR_DOCKERHUB_USERNAME/freshmart-storefront:latest .
```

## Run locally
```bash
docker run --rm -p 8080:80 YOUR_DOCKERHUB_USERNAME/freshmart-storefront:latest
```
Open http://localhost:8080

## Push manually
```bash
docker login
docker push YOUR_DOCKERHUB_USERNAME/freshmart-storefront:latest
```

## GitHub Actions automation
Create GitHub repository secrets:
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN` (Docker Hub personal access token with Read & Write permission)

Push to `main`. Workflow `.github/workflows/dockerhub.yml` builds and pushes the image automatically.

This is a frontend demo. Product/cart data is client-side only; there is no payment or backend service.
