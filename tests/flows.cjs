const fs=require('fs'),vm=require('vm'),assert=require('assert');const html=fs.readFileSync('dist/index.html','utf8'),script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const elements=new Map(),el=s=>{if(!elements.has(s))elements.set(s,{innerHTML:'',textContent:'',hidden:false,disabled:false,files:[],addEventListener(){},showModal(){},close(){}});return elements.get(s)};const storage=()=>{let v={};return{getItem:k=>v[k]||null,setItem:(k,x)=>v[k]=x,removeItem:k=>delete v[k]}};const ctx={console,localStorage:storage(),sessionStorage:storage(),document:{querySelector:el,hidden:false},location:{hash:''},window:{addEventListener(){},scrollTo(){}},setInterval(){},setTimeout(){},clearTimeout(){},matchMedia:()=>({matches:false}),structuredClone,URLSearchParams,FormData:class{constructor(o){this.o=o}get(k){return this.o[k]}[Symbol.iterator](){return Object.entries(this.o)[Symbol.iterator]()}},navigator:{}};vm.createContext(ctx);vm.runInContext(script,ctx);function run(s){return vm.runInContext(s,ctx)}
assert(el('#app').innerHTML.includes('Made for'));
run("guard('/checkout')");assert.equal(ctx.location.hash,'/login');
run("variant={size:'M',color:'Sand',qty:2};add(1,false)");assert.equal(run('cart[0].qty'),2);assert.equal(run("totals(cart,'HELLO10','Dhaka').total"),3482);
run("variant.qty=8;add(1,false)");assert.equal(run('cart[0].qty'),2);
run("variant.qty=1;add(2,true)");assert.equal(run('cart.length'),1);assert.equal(run("JSON.parse(sessionStorage.getItem('yb-buy')).id"),2);
run("user={name:'Demo',email:'demo@example.com'};placeOrder({name:'Demo',phone:'00000000000',district:'Dhaka',address:'Sample'},false)");assert.equal(run('orders.length'),1);assert.equal(run('cart.length'),0);
run("submitPayment({provider:'bKash',transaction:'demo-tx-1',sender:'00000000000',amount:3860},orders[0].id)");assert.equal(run('orders[0].payment'),'verification_pending');
run("decide(orders[0].id,true,'Demo record matched')");assert.equal(run('orders[0].payment'),'verified');
run("advance(orders[0].id)");assert.equal(run('orders[0].status'),'processing');
run("user={name:'Other',email:'other@example.com'}");assert.equal(run('ownedOrder(orders[0].id)'),undefined);
for(const route of ['/','/shop','/collections/new','/products/1','/cart','/login','/register','/forgot-password','/admin/payments','/admin/products','/admin/offers','/policies/returns','/404']){ctx.location.hash='#'+route;run('render()');assert(el('#app').innerHTML.length>100,route)}
console.log('PASS: homepage, login guard, stock ceiling, cart, capped discount, buy-now preservation, order creation, pending payment, review, fulfillment guard, owner filtering and 13 route renders.');
