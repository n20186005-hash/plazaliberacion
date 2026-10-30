import astro from '@astrojs/cloudflare/entrypoints/server';
const host = 'plazaliberacion.com';
export default {
 async fetch(request, env, context) {
  const url=new URL(request.url);
  if(url.hostname==='www.'+host||(url.hostname===host&&url.protocol==='http:')) {url.protocol='https:';url.hostname=host;url.port='';return new Response(null,{status:308,headers:{Location:url.href}});}
  if(url.pathname==='/index.html') return new Response(null,{status:308,headers:{Location:new URL('/'+url.search,url).href}});
  const alias=/^\/404(?:\.html|\/)?$/.test(url.pathname);
  let response=alias?null:await astro.fetch(request,env,context);
  if(alias||response.status===404){
   if(alias){response=await env.ASSETS.fetch(new Request(new URL('/404.html',url)));if(response.status>=300&&response.status<400&&response.headers.get('Location')){const next=new URL(response.headers.get('Location'),url);if(next.origin===url.origin&&/^\/404(?:\.html|\/)?$/.test(next.pathname))response=await env.ASSETS.fetch(new Request(next));}}
   const headers=new Headers(response.headers);headers.delete('Location');headers.set('X-Robots-Tag','noindex');headers.set('Cache-Control','no-store');return new Response(request.method==='HEAD'?null:response.body,{status:404,headers});
  }
  return request.method==='HEAD'?new Response(null,{status:response.status,headers:response.headers}):response;
 }
};
