(window["webpackJsonpneighbourhood-map"]=window["webpackJsonpneighbourhood-map"]||[]).push([[0],{14:function(e,t,r){e.exports=r(35)},19:function(e,t,r){},35:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),a=r(9),s=r.n(a),o=(r(19),r(1)),l=r(2),c=r(5),u=r(3),d=r(4),f=(r(6),function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={error:null,errorInfo:null},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?i.a.createElement("div",{id:"errorBoundary"},i.a.createElement("h2",null,"Oops ... something went wrong. :/"),i.a.createElement("details",null,this.state.error&&this.state.error.toString(),i.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(i.a.Component)),p=new function e(){Object(o.a)(this,e),this.apiKey="AIzaSyBNw3PngzPkw0wrlrYPdLAXRZidZNSlrzA",this.center={lat:40.757339,lng:-73.985992},this.zoom=15},h=new(function(){function e(){Object(o.a)(this,e),this.credentials={client_id:"AORGIPFRDB40EEAD0P2RPHOZDIDCMABI3A4WJLLWCQWAVMNW",client_secret:"LXDPAK1VCGSFLT2NA1N54AJFNPIFCB3XMXM2ZEBUXDJNLI53"},this.fullVenues=[{id:"49b7ed6df964a52030531fe3",name:"Times Square",location:{address:"Broadway & 7th Ave",crossStreet:"btwn 42nd & 47th St",lat:40.757935054802104,lng:-73.9862082207571,formattedAddress:["Broadway & 7th Ave (btwn 42nd & 47th St)","New York, NY 10036","United States"]},canonicalUrl:"https://foursquare.com/v/times-square/49b7ed6df964a52030531fe3",url:"http://timessquarenyc.org/index.aspx",bestPhoto:{id:"525c7abc11d22e7fcc08bc83",prefix:"https://fastly.4sqi.net/img/general/",suffix:"/476_OEblz_W09ZL0-IhXSyp3MNFoO1Toq_I0NjIX2YRzSGE.jpg",width:640,height:640,visibility:"public"}},{id:"4b135e9bf964a520ad9623e3",name:"Madame Tussauds",location:{address:"234 W 42nd St",lat:40.756432,lng:-73.988828,formattedAddress:["234 W 42nd St (btwn 7th & 8th Ave.)","New York, NY 10036","United States"]},canonicalUrl:"https://foursquare.com/v/madame-tussauds/4b135e9bf964a520ad9623e3",url:"http://www.madametussauds.com/NewYork",description:"Mingle with over 200 wax celebrities in 85,000 sq ft of interactive entertainment located in Times Square!",bestPhoto:{id:"50dc6610e4b0b8da13b511c5",prefix:"https://fastly.4sqi.net/img/general/",suffix:"/40551984_9nTy6_RWB5NM9wyjspp1wRaMmLMcwdfyF4xprVLMiJE.jpg",width:720,height:960,visibility:"public"}},{id:"42829c80f964a5206a221fe3",name:"Grand Central Terminal",location:{address:"87 E 42nd St",lat:40.75272511851483,lng:-73.97736414087431,formattedAddress:["87 E 42nd St (btwn Vanderbilt & Park Ave)","New York, NY 10017","United States"]},canonicalUrl:"https://foursquare.com/v/grand-central-terminal/42829c80f964a5206a221fe3",url:"https://www.grandcentralterminal.com",bestPhoto:{id:"51006d8be4b014ee565396a5",prefix:"https://fastly.4sqi.net/img/general/",suffix:"/708901_Wp8kf7WMP78cuRIsFtB7ma5FyrdNTAh27sFup40TI54.jpg",width:612,height:612,visibility:"public"}},{id:"43a48f1bf964a520502c1fe3",name:"Top of the Rock Observation Deck",location:{address:"30 Rockefeller Plz",lat:40.759095065214055,lng:-73.97935153748539,formattedAddress:["30 Rockefeller Plz (btwn 5th & 6th Ave)","New York, NY 10112","United States"]},canonicalUrl:"https://foursquare.com/v/top-of-the-rock-observation-deck/43a48f1bf964a520502c1fe3",url:"http://www.topoftherocknyc.com",bestPhoto:{id:"51b74b82498e4ebc45d84fde",prefix:"https://fastly.4sqi.net/img/general/",suffix:"/113687_9XVInqqhDNjT9X1Zpyk5xk-Vnri1C4f_xfUSgm69zNE.jpg",width:612,height:612,visibility:"public"}},{id:"43695300f964a5208c291fe3",name:"Empire State Building",location:{address:"350 5th Ave",lat:40.7485995507123,lng:-73.98580648682452,formattedAddress:["350 5th Ave (btwn 33rd & 34th St)","New York, NY 10118","United States"]},canonicalUrl:"https://foursquare.com/v/empire-state-building/43695300f964a5208c291fe3",url:"https://www.esbnyc.com",description:"Soaring 1,454 ft. (443 m.) above Manhattan, the Empire State Building is the region's #1 tourist attraction & the heart of New York City. Our 86th & 102nd floor Observatories offer the two highest viewing decks in NYC along with unobstructed 360-degree views. On a clear day, you can see five states!",bestPhoto:{id:"51b8f916498e6a8c16a329eb",prefix:"https://fastly.4sqi.net/img/general/",suffix:"/26739064_mUxQ4CGrobFqwpcAIoX6YoAdH0xCDT4YAxaU6y65PPI.jpg",width:612,height:612,visibility:"public"}}]}return Object(l.a)(e,[{key:"buildUrl",value:function(){return"https://api.foursquare.com/v2/venues/explore?client_id="+this.credentials.client_id+"&client_secret="+this.credentials.client_secret+"&v=20190814&ll="+(p.center.lat+","+p.center.lng)}}]),e}()),m=r(11),g=r(10),v=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).getOrCreateRef=function(e){return r.references.hasOwnProperty(e)||(r.references[e]=i.a.createRef()),r.references[e]},r.gm_authFailure=function(){var e=document.getElementById("map");e.innerHTML="";var t=document.createElement("div");t.className="GoogleMaps-error",t.innerHTML="",t.innerHTML+='<div id="errorBoundary">',t.innerHTML+="<h2>Google Maps error</h2>",t.innerHTML+="<p>Oops! We could load Google Maps :/ Check your API key for any possible errors</p>",e.appendChild(t)},r.getVisibleMarkers=function(){var e,t=r.props.markers,n=Object(m.a)(r);return t&&(e=t.filter(function(e){return e.isVisible}).map(function(e,t,r){var a=n.setMarkerAnimation(e,r);return i.a.createElement(g.Marker,{ref:n.getOrCreateRef(e.venue.id),name:e.venue.name,id:e.venue.id,key:e.venue.id,position:{lat:e.lat,lng:e.lng},animation:a,onClick:n.onMarkerClick,venue:e.venue,isOpen:e.isOpen})})),e},r.onMarkerClick=function(e,t,n){r.props.handleMarkerClick(t)},r.setMarkerAnimation=function(e,t){var n=r.props.google,i=r.props.markerSelected,a=r.props.query,s=r.props.markers,o=null;return e.isOpen?o=n.maps.Animation.BOUNCE:i||a||t.length!==s.length||(o=n.maps.Animation.DROP),o},r.buildInfoWindowContent=function(){return r.props.activeMarker?r.props.activeMarker.venue:r.props.clickFilterActive?r.props.selectedVenue:{name:"Default name",location:{formattedAddress:["Default","Address"]},categories:[{name:"Default category"}]}},r.onClose=function(){r.props.handleInfoWindowClose()},r.setInfoWindowMarker=function(){var e=r.props.activeMarker,t=r.props.clickFilterActive,n=r.props.selectedVenue,i=null;return e?i=e:t&&(i=r.references[n.id].current.marker),i},r.state={googleMapsConfig:p},r.references={},window.gm_authFailure=r.gm_authFailure,r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.googleMapsConfig.center,t=this.state.googleMapsConfig.zoom,r=this.props.google,n=this.getVisibleMarkers(),a=this.buildInfoWindowContent(),s=this.setInfoWindowMarker();return i.a.createElement("div",{id:"map"},i.a.createElement(g.Map,{google:r,initialCenter:e,zoom:t},n,i.a.createElement(g.InfoWindow,{position:s?s.position:null,pixelOffset:new r.maps.Size(0,-50),visible:this.props.markerSelected,onClose:this.onClose},i.a.createElement("div",{id:"infoWindow"},i.a.createElement("h3",{id:"venueName"},a.name),i.a.createElement("h5",{id:"address"},a.location.formattedAddress.join()),i.a.createElement("p",{id:"description"},i.a.createElement("strong",null,"Category:"),a.categories[0].name)))))}}]),t}(i.a.Component),k=Object(g.GoogleApiWrapper)({apiKey:p.apiKey})(v),b=function(){return i.a.createElement("header",{className:"App-header"},i.a.createElement("nav",{className:"Navbar"},i.a.createElement("a",{className:"Navbar-brand",href:"/"},"Neighborhood Map"),i.a.createElement("div",{className:"Api-attribution"},"Powered by Google Maps and Foursquare API data")))},y=function(e){var t=function(e){return e.trim().toLowerCase()};return i.a.createElement("div",{id:"searchBarDiv"},i.a.createElement("input",{id:"searchVenue",onChange:function(r){var n=t(r.target.value);e.onChange(n),e.turnTextFilterOn(),e.resetVenue()},type:"text",placeholder:"Search a venue",value:e.queryString}))},w=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).resetToggle=function(){r.setState({isToggleOn:!1})},r.toggleSelection=function(){r.setState(function(e){return{isToggleOn:!e.isToggleOn}},r.filterMethod)},r.filterMethod=function(){r.state.isToggleOn?r.filterByClick():r.resetFilter(),r.props.resetTextFilter()},r.filterByClick=function(){r.props.filterByClick(r.props.venue)},r.resetFilter=function(){r.props.resetFilter()},r.state={isToggleOn:!1},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.venue.id,t=this.props.venue.name,r="Sidebar-item";return this.props.isTextFilterOn||this.state.isToggleOn&&(r+=" Highlight"),i.a.createElement("li",{id:e,className:r,onClick:this.toggleSelection},t)}}]),t}(i.a.Component),O=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).updateQuery=function(e){r.props.updateQuery(e)},r.resetVenue=function(){r.props.resetVenue()},r.resetTextFilter=function(){r.setState({isTextFilterOn:!1})},r.turnTextFilterOn=function(){r.setState({isTextFilterOn:!0})},r.filterByClick=function(e){r.props.filterByClick(e)},r.resetFilter=function(){r.props.resetFilter(),r.resetTextFilter()},r.state={isTextFilterOn:!1},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.isTextFilterOn,t=this.props.selectedVenues,r=this,n=[];return t&&t.forEach(function(t){n.push(i.a.createElement(w,{key:t.id,isTextFilterOn:e,venue:t,filterByClick:r.filterByClick,resetFilter:r.resetFilter,resetTextFilter:r.resetTextFilter}))}),i.a.createElement("div",{id:"sidebarMenuContainer"},i.a.createElement(y,{onChange:this.updateQuery,queryString:this.props.queryString,turnTextFilterOn:this.turnTextFilterOn,resetVenue:this.resetVenue}),i.a.createElement("div",{id:"sidebarMenu"},i.a.createElement("ul",null,n)))}}]),t}(i.a.Component),S=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).updateQuery=function(e){r.props.updateQuery(e)},r.resetVenue=function(){r.props.resetVenue()},r.filterByClick=function(e){r.props.filterByClick(e)},r.resetFilter=function(){r.props.resetFilter()},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"Sidebar",role:"navigation"},i.a.createElement("div",{id:"menuToggle"},i.a.createElement("input",{id:"Sidebar-toggle",type:"checkbox"}),i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement(O,{selectedVenues:this.props.selectedVenues,queryString:this.props.queryString,updateQuery:this.updateQuery,resetVenue:this.resetVenue,filterByClick:this.filterByClick,resetFilter:this.resetFilter})))}}]),t}(i.a.Component),C=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).getVenues=function(){var e=h.buildUrl();fetch(e).then(function(e){return e.json()}).then(function(e){var t=e.response.groups[0].items,n=[];t.forEach(function(e){n.push(e.venue)});var i=n.map(function(e){return{lat:e.location.lat,lng:e.location.lng,isOpen:!1,isVisible:!0,id:e.id,venue:e}});r.setState({venues:n,venuesRetrieved:!0,selectedVenues:n,markers:i})}).catch(function(e){console.error("Failed retrieving information",e),r.renderForusquareError()})},r.renderForusquareError=function(){var e=document.getElementById("map");e.innerHTML="";var t=document.createElement("div");t.className="GoogleMaps-error",t.innerHTML="",t.innerHTML+='<div id="errorBoundary">',t.innerHTML+="<h2>Foursquare error</h2>",t.innerHTML+="<p>Oops! We could load Foursquare locations :/ Check your API key for any possible errors</p>",e.appendChild(t)},r.updateQuery=function(e){r.setState({query:e,markerSelected:!1},function(){this.closeAllMarkers(),this.filterByText()})},r.filterByText=function(){var e=[],t=r.state.query;t?(r.state.venues.forEach(function(r){r.name.toLowerCase().includes(t)&&e.push(r)}),r.updateSelectedVenues(e)):r.resetSelectedVenues()},r.resetVenueByText=function(){r.setState({markerSelected:!1,clickFilterActive:!1})},r.filterByClick=function(e){r.closeAllMarkers(),r.selectVenue(e)},r.resetFilter=function(){r.setState({activeMarker:null,markerSelected:!1,clickFilterActive:!1}),r.updateQuery("")},r.resetSelectedVenues=function(){r.setState({selectedVenues:r.state.venues},r.filterMarkers)},r.updateSelectedVenues=function(e){r.setState({selectedVenues:e},r.filterMarkers)},r.selectVenue=function(e){var t=r.state.markers.map(function(t){return t.venue===e?t.isOpen=!0:t.isOpen=!1,t});r.setState({activeMarker:null,clickFilterActive:!0,markers:Object.assign(r.state.markers,t),markerSelected:!0,query:e.name.trim().toLowerCase(),selectedVenue:e},r.filterByText)},r.filterMarkers=function(){var e=r.state.selectedVenues,t=r.state.markers.map(function(t){return e.includes(t.venue)?t.isVisible=!0:t.isVisible=!1,t});r.setState({markers:Object.assign(r.state.markers,t)})},r.closeAllMarkers=function(){var e=r.state.markers.map(function(e){return e.isOpen=!1,e});r.setState({markers:Object.assign(r.state.markers,e),markerSelected:!1})},r.handleMarkerClick=function(e){var t=null;e.isOpen||(t=e),r.setState({activeMarker:t}),r.selectClickedMarker(e.venue)},r.selectClickedMarker=function(e){var t=!1,n=r.state.markers.map(function(r){return r.venue===e?r.isOpen?r.isOpen=!1:(r.isOpen=!0,t=!0):r.isOpen=!1,r});r.setState({markers:Object.assign(r.state.markers,n),markerSelected:t})},r.handleInfoWindowClose=function(){r.closeAllMarkers()},r.state={activeMarker:null,clickFilterActive:!1,markers:[],markerSelected:!1,query:"",selectedVenue:null,selectedVenues:[],venues:[]},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getVenues()}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null,i.a.createElement(b,null)),i.a.createElement(f,null,i.a.createElement(S,{selectedVenues:this.state.selectedVenues,queryString:this.state.query,updateQuery:this.updateQuery,resetVenue:this.resetVenueByText,filterByClick:this.filterByClick,resetFilter:this.resetFilter})),i.a.createElement(f,null,i.a.createElement(k,{activeMarker:this.state.activeMarker,clickFilterActive:this.state.clickFilterActive,markers:this.state.markers,markerSelected:this.state.markerSelected,query:this.state.query,selectedVenue:this.state.selectedVenue,handleMarkerClick:this.handleMarkerClick,handleInfoWindowClose:this.handleInfoWindowClose,updateVisibleMarkers:this.updateVisibleMarkers})))}}]),t}(i.a.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(i.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/neighborhood-map",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/neighborhood-map","/service-worker.js");M?(!function(e,t){fetch(e).then(function(r){var n=r.headers.get("content-type");404===r.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):E(t,e)})}}()},6:function(e,t,r){}},[[14,1,2]]]);
//# sourceMappingURL=main.33895093.chunk.js.map