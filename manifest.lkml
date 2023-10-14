project_name: "helloworld-ts"

application: helloworld-ts {
  label: "Helloworld (TypeScript)"
  url: "https://localhost:8080/bundle.js"
  # file: "bundle.js
  entitlements: {
    use_downloads: yes
    use_form_submit: yes # Added for forms to work
    use_embeds:  yes
    local_storage: yes
    core_api_methods: ["user_attribute", "me"] # Allowed looker api permissions
    external_api_urls : [
      "https://localhost:8080",
      "http://localhost:8000/*",
      "https://jsonplaceholder.typicode.com/posts/1",
    ] # whitelisting apis for external connection
    global_user_attributes: ["email", "environment_type"] # Global looker attributes we use inside extension
  }
}