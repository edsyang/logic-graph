declare const require: any;
declare const module: any; 

interface pageConfig {
  prefix: string
}

interface Window {
  pageConfig: pageConfig
}