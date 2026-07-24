const isLocal = true; 
export default {
  app_local: isLocal,
  app_dev_url: "http://localhost:8000/api",
    // app_dev_url: "http://192.168.10.105:8000/api",
  app_prod_url: "https://escen.neostart.tech/api",
  
  app_dev_storage_url: "http://localhost:8000",
  app_prod_storage_url: "https://escen.neostart.tech",
  

} as const; 