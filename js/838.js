(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[838],{94647:(e,t,r)=>{"use strict";r.r(t),r.d(t,{loadInterface:()=>gt});var a,o,n,i,s,d,c,u=r(84303);!function(e){e.FORWARD="FORWARD",e.LEFT="LEFT",e.RIGHT="RIGHT",e.BACK="BACK",e.UP="UP",e.DOWN="DOWN"}(a||(a={}));!function(e){e.INSIDE="mode.inside",e.OUTSIDE="mode.outside",e.DOLLHOUSE="mode.dollhouse",e.FLOORPLAN="mode.floorplan",e.TRANSITIONING="mode.transitioning"}(o||(o={}));!function(e){e.INSTANT="transition.instant",e.FLY="transition.fly",e.FADEOUT="transition.fade",e.MOVEFADE="transition.movefade"}(n||(n={}));class convertRotation_Conversion{constructor(e){this.THREE=e,this.tempEuler=new e.Euler}quaternionToRotation(e,t){const r=this.tempEuler.setFromQuaternion(e,convertRotation_Conversion.eulerOrder),a=t||{};return a.x=this.THREE.MathUtils.radToDeg(r.x),a.y=this.THREE.MathUtils.radToDeg(r.y),a.z=this.THREE.MathUtils.radToDeg(r.z),a}rotationToQuaternion(e,t){const r=t||new this.THREE.Quaternion;return this.tempEuler.x=this.THREE.MathUtils.degToRad(e.x),this.tempEuler.y=this.THREE.MathUtils.degToRad(e.y),this.tempEuler.z=this.THREE.MathUtils.degToRad(e.z||0),this.tempEuler.order=convertRotation_Conversion.eulerOrder,r.setFromEuler(this.tempEuler)}}convertRotation_Conversion.eulerOrder="YXZ",function(e){e.LEGACY="legacy",e.API="api"}(i||(i={})),function(e){e.PHASE_CHANGE="application.phasechange",e.APP_CHANGE="application.appchange"}(s||(s={})),function(e){e.UNKNOWN="application.unknown",e.WEBVR="application.webvr",e.SHOWCASE="application.showcase",e.WORKSHOP="application.workshop"}(d||(d={})),function(e){e.UNINITIALIZED="appphase.uninitialized",e.WAITING="appphase.waiting",e.LOADING="appphase.loading",e.STARTING="appphase.starting",e.PLAYING="appphase.playing",e.ERROR="appphase.error"}(c||(c={}));Math.PI;var l;!function(e){e.MOVE="camera.move"}(l||(l={}));var h=r(88512);new h.Z("broadcast.move");new h.Z("command.zoom");var p,g,w,m,T,S;!function(e){e.CHANGE_START="floors.changestart",e.CHANGE_END="floors.changeend"}(p||(p={})),function(e){e.POSITION_UPDATED="label.positionupdated"}(g||(g={})),function(e){e.HOVER="tag.hover",e.CLICK="tag.click",e.LINK_OPEN="tag.linkopen"}(w||(w={})),function(e){e.NONE="mattertag.media.none",e.PHOTO="mattertag.media.photo",e.VIDEO="mattertag.media.video",e.RICH="mattertag.media.rich"}(m||(m={})),function(e){e.NONE="tag.chunk.none",e.TEXT="tag.chunk.text",e.LINK="tag.chunk.link"}(T||(T={})),function(e){e.NAVIGATION="tag.link.nav",e.MODEL="tag.link.model",e.EXT_LINK="tag.link.ext"}(S||(S={}));r(20331);const E=new h.Z("sdk.editIcon");class SvgLoader{constructor(e){this.queue=e}async load(e){const t=await this.queue.get(e,{responseType:"text"}),r=document.createElement("div");r.innerHTML=t;const a=r.querySelector("svg");if(!a)throw Error("Failed trying to load "+e+"as an svg.");const o=a.getAttribute("width"),n=a.getAttribute("height");return o||n?(n&&!o&&(E.warn(e,"does not have a defined width. Defaulting width equal to height"),a.setAttribute("width",n)),o&&!n&&(E.warn(e,"does not have a defined height. Defaulting height equal to width"),a.setAttribute("height",o))):(E.warn(e,"does not have a defined size. Defaulting to a 128x128 resolution"),a.setAttribute("width",SvgLoader.defaultResolution),a.setAttribute("height",SvgLoader.defaultResolution)),new Promise((e=>{const t=new Image;t.onload=()=>e(t),t.src=URL.createObjectURL(new Blob([a.outerHTML],{type:"image/svg+xml"}))}))}}SvgLoader.defaultResolution="128";new h.Z("mattertag-util");new h.Z("mattertag.add");new h.Z("mattertag.edit");var y;!function(e){e.LABEL="label",e.DESCRIPTION="description",e.MEDIA="media"}(y||(y={}));new h.Z("command.editOpacity");var f;r(2815),r(24800);!function(e){e.CHANGE_START="viewmode.changestart",e.CHANGE_END="viewmode.changeend"}(f||(f={}));new h.Z("move-to-mode-command");var I,C;!function(e){e.MODEL_LOADED="model.loaded"}(I||(I={})),function(e){e.NONE="intersectedobject.none",e.MODEL="intersectedobject.model",e.TAG="intersectedobject.tag",e.SWEEP="intersectedobject.sweep",e.UNKNOWN="intersectedobject.unknown"}(C||(C={}));const b=new h.Z("sdk.textureLoader");class TextureLoader_SvgLoader{constructor(e){this.queue=e}async load(e){const t=await this.queue.get(e,{responseType:"text"}),r=document.createElement("div");r.innerHTML=t;const a=r.querySelector("svg");if(!a)throw Error("Failed trying to load "+e+"as an svg.");const o=a.getAttribute("width"),n=a.getAttribute("height");return o||n?(n&&!o&&(b.warn(e,"does not have a defined width. Defaulting width equal to height"),a.setAttribute("width",n)),o&&!n&&(b.warn(e,"does not have a defined height. Defaulting height equal to width"),a.setAttribute("height",o))):(b.warn(e,"does not have a defined size. Defaulting to a 128x128 resolution"),a.setAttribute("width",TextureLoader_SvgLoader.defaultResolution),a.setAttribute("height",TextureLoader_SvgLoader.defaultResolution)),new Promise((e=>{const t=new Image;t.onload=()=>e(t),t.src=URL.createObjectURL(new Blob([a.outerHTML],{type:"image/svg+xml"}))}))}}TextureLoader_SvgLoader.defaultResolution="128";var R,O,v;!function(e){e.Base64JPG="screenshot.base64.jpg",e.ArrayBufferJPG="screenshot.arraybuffer.jpg"}(R||(R={}));class EquirectangularExecutor{constructor(e,t,r){this.Viewmode=t.Viewmode,this.requestTarget=r.requestTarget,this.encodeRenderTarget=r.encodeRenderTarget,this.jpegAsBase64=r.jpegAsBase64,this.getXmp=r.getXmp,this.getOrientedAngleTo=r.getOrientedAngleTo,this.forward=new e.Vector3(0,0,-1),this.sweepForward=new e.Vector3,this.viewForward=new e.Vector3}validateInput(e){return e}async exec(e,t,r,a,o,n,i){if(!n.currentSweep||o.currentMode!==this.Viewmode.Panorama)throw new Error("Can only capture equirectangular projections while stationary in a sweep");const s=r.getScene().camera,d=n.getSweep(n.currentSweep),c=await i.load(d);this.sweepForward.copy(this.forward),this.sweepForward.copy(this.forward).applyQuaternion(d.rotation).setY(0);const u=this.getOrientedAngleTo(this.sweepForward,s.getWorldDirection(this.viewForward).setY(0))+Math.PI,l=await this.requestTarget();l.setSize(EquirectangularExecutor.equirectangularRes.width,EquirectangularExecutor.equirectangularRes.height),a.renderEquirectangular(c,l.target,u);const h=await this.encodeRenderTarget(l,this.getXmp(l.width,l.height,0,0));t.return(this.jpegAsBase64(h))}}EquirectangularExecutor.equirectangularRes={width:4096,height:2048},function(e){e.CLICK="INTERACTION.CLICK",e.HOVER="INTERACTION.HOVER",e.DRAG="INTERACTION.DRAG",e.DRAG_BEGIN="INTERACTION.DRAG_BEGIN",e.DRAG_END="INTERACTION.DRAG_END",e.POINTER_MOVE="INTERACTION.POINTER_MOVE",e.POINTER_BUTTON="INTERACTION.POINTER_BUTTON",e.SCROLL="INTERACTION.SCROLL",e.KEY="INTERACTION.KEY",e.LONG_PRESS_START="INTERACTION.LONG_PRESS_START",e.LONG_PRESS_END="INTERACTION.LONG_PRESS_END",e.MULTI_SWIPE="INTERACTION.MULTI_SWIPE",e.MULTI_SWIPE_END="INTERACTION.MULTI_SWIPE_END",e.PINCH="INTERACTION.PINCH",e.PINCH_END="INTERACTION.PINCH_END",e.ROTATE="INTERACTION.ROTATE",e.ROTATE_END="INTERACTION.ROTATE_END"}(O||(O={})),function(e){e.OBJ_LOADER="mp.objLoader",e.FBX_LOADER="mp.fbxLoader",e.DAE_LOADER="mp.daeLoader",e.GLTF_LOADER="mp.gltfLoader",e.SCROLLING_TUBE="mp.scrollingTube",e.TRANSFORM_CONTROLS="mp.transformControls",e.LIGHTS_COMPONENT="mp.lights",e.POINT_LIGHT="mp.pointLight",e.DIRECTIONAL_LIGHT="mp.directionalLight",e.AMBIENT_LIGHT="mp.ambientLight",e.CAMERA="mp.camera",e.INPUT="mp.input",e.XR="mp.xr"}(v||(v={}));class SensorReadingCollection{constructor(){this.sourceMap=new Map,this.reverseSourceLookup=new Map,this.sourceId=0,this._data={}}get data(){return this._data}isItemEqual(e,t){return e.data[t].inRange===this.data[t].inRange&&e.data[t].inView===this.data[t].inView}update(e){for(const[o,n]of e.readings){const e=this.addOrGetSourceId(o),i=this._data[e]||{};i.inRange=n.inRange,i.inView=n.inView,i.distanceSquared=n.distanceSq,i.direction=(t=n,r="direction",(a=(a=i.direction)||{}).x=t[r].x,a.y=t[r].y,a.z=t[r].z,a),this._data[e]=i}var t,r,a;for(const t in this.data){const r=this.reverseSourceLookup.get(t);r&&!e.readings.get(r)&&(this.sourceMap.delete(r),this.reverseSourceLookup.delete(t),delete this._data[t])}}clear(){this._data={}}addOrGetSourceId(e){const t=this.sourceMap.get(e);if(t)return t;const r="source-"+ ++this.sourceId;return this.sourceMap.set(e,r),this.reverseSourceLookup.set(r,e),r}}class DependencyFetcher_DependencyFetcher{constructor(...e){this.dependencies=e}async getDependencies(){return Promise.all(this.dependencies)}static extend(e,...t){return new DependencyFetcher_DependencyFetcher(...e.dependencies,...t)}static combine(e,t){return new DependencyFetcher_DependencyFetcher(...e.dependencies,...t.dependencies)}}class ClassFactory_ClassFactory{constructor(e,...t){this.ctor=e,this.args=t}create(){return new this.ctor(...this.args)}}class SdkCollection_SdkCollection{constructor(e,t,r){this.dependencies=e,this.subscriptionFactory=t,this.dataFactory=r,this.dirty=!0,this.observers=new Set,this.currentData=r.create();this.changeSubscription=this.subscriptionFactory.create(new class DirtinessObserver{constructor(e){this.collection=e}onChanged(){this.collection.dirty=!0;for(const e of this.collection.observers)e.onChanged()}}(this),...this.dependencies),this.changeSubscription.cancel()}static async create(e,t,r){const a=await e.getDependencies();return new SdkCollection_SdkCollection(a,t,r)}getData(){return this.currentData.data}subscribe(){const e=this.dependencies;const t=new class CollectionChangeObserver{constructor(e){this.sdkCollection=e,this.needsUpdate=!0,this.diffRecord={added:new Map,removed:new Map,updated:new Map},this.dataView=e.dataFactory.create()}get dirty(){return this.needsUpdate}readDiff(){const{added:t,removed:r,updated:a}=this.diffRecord;if(t.clear(),r.clear(),a.clear(),!this.dirty)return this.diffRecord;this.sdkCollection.update();const o=this.sdkCollection.currentData;for(const e in o.data)this.dataView.data.hasOwnProperty(e)?this.dataView.isItemEqual(o,e)||a.set(e,o.data[e]):t.set(e,o.data[e]);for(const e in this.dataView.data)o.data.hasOwnProperty(e)||r.set(e,this.dataView.data[e]);return this.dataView.update(...e),this.needsUpdate=!1,this.diffRecord}onChanged(){this.needsUpdate=!0}renew(){this.sdkCollection.addObserver(this)}cancel(){this.sdkCollection.removeObserver(this)}}(this);return this.addObserver(t),t}update(){this.dirty&&(this.currentData.update(...this.dependencies),this.dirty=!1)}addObserver(e){0===this.observers.size&&(this.changeSubscription.renew(),this.dirty=!0),this.observers.add(e)}removeObserver(e){this.observers.delete(e),0===this.observers.size&&(this.changeSubscription.cancel(),this.currentData.clear())}}var D=r(94326),N=r(40918);function M(e,t){!function(e,t){e.x=t.x,e.y=t.y}(e,t),e.z=t.z}var A=r(66363);class SensorStateObservable{constructor(){this._data={origin:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1}}}get data(){return this._data}equals(e){const t=1e-5;return(0,A.wo)(this.data.origin,e.data.origin,t)&&(0,A.wo)(this.data.forward,e.data.forward,t)}copy(e){M(this._data.origin,e.data.origin),M(this._data.forward,e.data.forward)}update(e){M(this._data.origin,e.frustum.origin),M(this._data.forward,e.frustum.forward)}}var L=r(56943);class executor_createSensor_CreateSensorExecutor{constructor(e,t){this.sdkModule=e,this.sensorFactories=t}validateInput(e){if(!(0,L.p)(D.dE,e.type))throw Error(e.type+" is not a valid sensor type");return this.sensorFactories[e.type].validateInput(e)}async exec(e,t,r,a,o){const n=this.sensorFactories[e.type].create(e,r),i="sensor-"+ ++executor_createSensor_CreateSensorExecutor.nextSensorId;a.set(i,n);const s=N.l.create(new DependencyFetcher_DependencyFetcher(n),new SensorStateSubscriptionFactory,new ClassFactory_ClassFactory(SensorStateObservable)),d=this.sdkModule.addObservable(i,s),c=SdkCollection_SdkCollection.create(new DependencyFetcher_DependencyFetcher(n),new SensorReadingSubscriptionFactory,new ClassFactory_ClassFactory(SensorReadingCollection)),u=this.sdkModule.addCollection(i,c);o.set(i,{dispose(){d.dispose(),u.dispose()}}),t.return({sensorId:i})}}executor_createSensor_CreateSensorExecutor.nextSensorId=0;class SensorStateSubscriptionFactory{create(e,t){return t.frustum.observe(new DependencyObserverAdaptor(e))}}class SensorReadingSubscriptionFactory{create(e,t){return t.onReadingsUpdated(new DependencyObserverAdaptor(e))}}class DependencyObserverAdaptor{constructor(e){this.dependencyObserver=e}notify(){this.dependencyObserver.onChanged()}}var _=r(60402);Math.PI;class executor_createSource_CreateSourceExecutor{constructor(e){this.sourceFactories=e}validateInput(e,t){if(!(0,L.p)(_.PO,e.type))throw Error(e.type+" is not a valid source type");return this.sourceFactories[e.type].validateInput(e)}exec(e,t,r){const a=this.sourceFactories[e.type].create(e),o="source-"+ ++executor_createSource_CreateSourceExecutor.nextSourceId;r.set(o,a),t.return({sourceId:o,type:e.type,volume:a.describeVolume()})}}executor_createSource_CreateSourceExecutor.nextSourceId=0;var P,F,k;!function(e){e.FPS="stat.fps"}(P||(P={}));!function(e){e.ALIGNED="aligned",e.UNALIGNED="unaligned"}(F||(F={})),function(e){e.UNPLACED="unplaced",e.AUTO="auto",e.MANUAL="manual"}(k||(k={}));var x,G,U=r(68524);class CurrentSweepObservable{constructor(e,t){this.currentSweep=Object.assign(Object.assign({},CurrentSweepObservable.empty),{floorInfo:Object.assign({},CurrentSweepObservable.empty.floorInfo),neighbors:[],position:Object.assign({},CurrentSweepObservable.empty.position),rotation:Object.assign({},CurrentSweepObservable.empty.rotation)}),this.Viewmode=e.Viewmode,this.sweepPlacementConverter=t.sweepPlacementConverter}get data(){return this.currentSweep}equals(e){const t=U.Z.epsilon;return this.currentSweep.id===e.data.id&&this.currentSweep.enabled===e.data.enabled&&this.currentSweep.alignmentType===e.data.alignmentType&&this.currentSweep.placementType===e.data.placementType&&this.currentSweep.floorInfo.id===e.data.floorInfo.id&&this.currentSweep.floorInfo.sequence===e.data.floorInfo.sequence&&this.compareNeighbors(e.currentSweep)&&(0,A.wo)(this.currentSweep.position,e.data.position,t)&&(0,A.wo)(this.currentSweep.rotation,e.data.rotation,t)}copy(e){this.copySweep(e.data)}update(e,t,r,a,o){const n=e.currentSweepObject;if(!n||e.transition.active||t.transition.active||!t.isInside()&&t.currentMode!==this.Viewmode.Outdoor)return void this.copySweep(CurrentSweepObservable.empty);let i;try{i=r.getFloor(n.floorId||"")}catch(e){i={id:void 0,index:void 0}}const s=a.getIdForSweep(n);this.currentSweep.uuid=n.uuid,this.currentSweep.sid=s,this.currentSweep.id=s,this.currentSweep.enabled=n.enabled,this.currentSweep.alignmentType=this.sweepPlacementConverter.toSdkAlignment(n.alignmentType),this.currentSweep.placementType=this.sweepPlacementConverter.toSdkPlacement(n.placementType),this.currentSweep.neighbors=[...n.neighbours],M(this.currentSweep.position,n.position),M(this.currentSweep.rotation,n.rotation),this.currentSweep.alignmentType===F.UNALIGNED&&this.currentSweep.placementType===k.UNPLACED?(this.currentSweep.floorInfo.id=void 0,this.currentSweep.floorInfo.sequence=void 0):(this.currentSweep.floorInfo.id=i.id?o.getIdFromCwfId(i.id):i.id,this.currentSweep.floorInfo.sequence=i.index)}copySweep(e){this.currentSweep.uuid=e.uuid,this.currentSweep.sid=e.sid,this.currentSweep.id=e.id,this.currentSweep.enabled=e.enabled,this.currentSweep.alignmentType=e.alignmentType,this.currentSweep.placementType=e.placementType,this.currentSweep.floorInfo.id=e.floorInfo.id,this.currentSweep.floorInfo.sequence=e.floorInfo.sequence,this.currentSweep.neighbors=[...e.neighbors],M(this.currentSweep.position,e.position),M(this.currentSweep.rotation,e.rotation)}compareNeighbors(e){const t=this.currentSweep.neighbors.length;for(let r=0;r<t;++r)if(this.currentSweep.neighbors[r]!==e.neighbors[r])return!1;return t===e.neighbors.length}}CurrentSweepObservable.empty={uuid:"",sid:"",id:"",enabled:!1,alignmentType:F.ALIGNED,placementType:k.UNPLACED,floorInfo:{id:void 0,sequence:void 0},neighbors:[],position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0}},function(e){e.ENTER="sweep.enter",e.EXIT="sweep.exit"}(x||(x={}));!function(e){e.STARTED="tour.started",e.STOPPED="tour.stopped",e.ENDED="tour.ended",e.STEPPED="tour.stepped"}(G||(G={}));new h.Z("sdk: tours");var q=r(8684),H=r(96909),V=r(66223),B=r(87202),j=r(76463),Z=r(69626),z=r(27687),W=r(89683),K=r(84561),Y=r(3248),X=r(8150),J=r(31278),Q=r(49924),$=r(90454),ee=r(76896),te=r(2725),re=r(98649),ae=r(41663),oe=r(34986),ne=r(90756),ie=r(46610),se=r(60225),de=r(58014),ce=r(36123),ue=r(29422),le=r(48470),he=r(40554),pe=r(42835),ge=r(61709),we=r(17386);class SettingGetCommand extends we.m{constructor(e){super(),this.payload={key:e}}}SettingGetCommand.id="SETTING_GET";class SettingUpdateCommand extends we.m{constructor(e,t){super(),this.payload={key:e,value:t}}}SettingUpdateCommand.id="SETTING_UPDATE";var me=r(16101),Te=r(35026),Se=r(29397),Ee=r(85895),ye=r(92532),fe=r(79553),Ie=r(91302),Ce=r(87068),be=r(12216),Re=r(94329),Oe=r(3805),ve=r(68576),De=r(88814),Ne=r(21479),Me=r(59088),Ae=r(40168),Le=r(26627),_e=r(27326),Pe=r(74371),Fe=r(40698),ke=r(58626),xe=r(60725),Ge=r(38003),Ue=r(8445),qe=r(44019),He=r(86488),Ve=r(33874),Be=r(75892),je=r(65379),Ze=r(69941),ze=r(35597),We=r(15982),Ke=r(21499),Ye=r(36822),Xe=r(13988),Je=r(14880),Qe=r(42593),$e=r(92895),et=r(87738),tt=r(44218),rt=r(29539),at=r(32306),ot=r(1466),nt=r(13827),it=r(88269),st=r(3198),dt=r(9576),ct=r(55105),ut=r(43993),lt=r(16563),ht=r(2212),pt=r(67027);async function gt(e,t,r){const a=await async function(){return await r.getAppKey("showcase","sdk_interface_version")||""}(),o=new q.M;let n;try{n=await o.load(a)}catch(e){throw Error("Unable to fetch the sdk interface. The sdk will be disabled. "+e)}const s={THREE:ht},d={MpSdkAuthentication:W.w,RenderLayers:K.o,OptionsKey:Y.gx,Application:Ne.Mx,AppPhase:Ne.nh,AppPhaseChangeMessage:X.LZ,CameraTransitionType:J.n,GetFloorIntersectCommand:Q.Z,StartMoveToFloorMessage:$.S,EndMoveToFloorMessage:ee.P,MoveToFloorIndexCommand:te.h9,ShowAllFloorsCommand:te.EU,MattertagMediaType:re.L,RemoveMattertagCommand:ae.Gn,TagDescriptionChunkType:oe.z,TagLinkType:ne.U,AddMattertagCommand:ae.Fz,EditMattertagCommand:ae.Ek,MattertagLinkOpenedMessage:ie.Ik,NavigateToMattertagCommand:se.Y,ModelDataLoadedMessage:de.Z,ModelColliderTarget:ce.S,NavigateToSweepCommand:ue.ju,MeasuringPhase:xe.au,SettingGetCommand:SettingGetCommand,SettingUpdateCommand:SettingUpdateCommand,PuckCollider:me.YY,PinClickedMessage:le.F7,PinHoverChangeMessage:le.tP,PinHeadMesh:he.$,InstancedPinHeads:ge.z,PinType:pe.Er,SweepAlignmentType:Te.z9,SweepPlacementType:Te.hU,BeginMoveToSweepMessage:Se.Z,EndMoveToSweepMessage:Ee.Z,ToggleToolCommand:ye.tT,Tools:fe.w1,TourStartedMessage:Ie.oR,TourStoppedMessage:Ie.NR,TourEndedMessage:Ie.Mt,TourSteppedMessage:Ie.Vx,Color:Ce.I,Vectors:be.f,Viewmode:Re.Ey,CommandViewmode:Oe.BD,ChangeViewmodeCommand:Oe._i,BeginSwitchViewmodeMessage:ve.Z,EndSwitchViewmodeMessage:De.Z,GetScreenPositionCommand:We.b,ZoomInCommand:Ke.bj,ZoomResetCommand:Ke.ob,ZoomSetCommand:Ke.ts,SourceType:nt.SourceType,sensorVolumes:{sphere:it.b,box:st.k,cylinder:dt.X}},c=wt(t),u=function(e){const t=(async()=>{const t=(await e.getModule(tt.default)).getSignedUrls();return new j.Z(t)})();return{applicationData:e.market.waitForData(Ne.pu),cameraData:e.market.waitForData(Me.M_),canvasData:e.market.waitForData(Ae.W),cursorController:e.getModuleBySymbol(H.y.CURSOR_CONTROLLER),floorData:e.market.waitForData(Le.i),floorViewData:e.market.waitForData(_e.c),labelData:e.market.waitForData(Pe.D),mattertagData:e.market.waitForData(Fe.n),mattertagViewData:e.market.waitForData(ke.P5),measurementModeData:e.market.waitForData(Ge.X),modelData:e.market.waitForData(Ue.T),raycasterData:e.market.waitForData(qe.P),roomData:e.market.waitForData(He.Z),settingsData:e.market.waitForData(Ve.e),sweepData:e.market.waitForData(Be.Z),sweepViewData:e.market.waitForData(je.D),tourData:e.market.waitForData(Ze.k3),viewmodeData:e.market.waitForData(ze.O),appPhaseModule:e.getModule(Ye.default),commonControlsModule:e.getModule(Xe.default),floorCasterModule:e.getModule(Je.default),mattertagDataModule:e.getModule(Qe.default),mattertagMeshModule:e.getModule($e.default),mattertagViewDataModule:e.getModule(et.default),modelDataModule:e.getModule(tt.default),modelMeshModule:e.getModuleBySymbol(H.y.MODEL_MESH),meshData:e.market.waitForData(pt._),navigationModule:e.getModule(rt.default),renderToTextureModule:e.getModule(at.default),sceneModule:e.getModuleBySymbol(H.y.SCENE),sensorModule:e.getModule(ct.K),settingsModule:e.getModule(ut.default),tourControlsModule:e.getModuleBySymbol(H.y.TOUR_CONTROLS),webglRendererModule:e.getModuleBySymbol(H.y.WEBGL_RENDERER),zoomControlModule:e.getModule(lt.default),sweepTextureLoader:t}}(t),l=new URLSearchParams(window.location.search).get("useLegacyIds"),h=null===l||parseInt(l,10)?i.LEGACY:i.API;n.setup(e,s,d,c,u,{idOption:h})}function wt(e){return{loadImage:V.p,waitForUpdate:()=>e.after(u.A.End),subscribe:(t,r)=>e.subscribe(t,r),addBinding:(t,r)=>e.commandBinder.addBinding(t,r),issueCommand:t=>e.commandBinder.issueCommand(t),requestTarget:()=>e.commandBinder.issueCommand(new B.oM),getRenderLayer:t=>e.getRenderLayer(t),jpegAsBase64:ot.jJ,encodeRenderTarget:ot.vP,getXmp:ot.fY,getOrientedAngleTo:Z.k2,screenPositionToNDC:z.z5,ndcToWorldPosition:z.st,worldToScreenPosition:z.q9}}},8684:(e,t,r)=>{"use strict";r.d(t,{M:()=>DynamicLibLoader});class DynamicLibLoader{constructor(){this.libraryCache=new Map}load(e,t){const r=this.libraryCache.get(e)||new ScriptFetcher(e,t);return this.libraryCache.set(e,r),r.library}}class ScriptFetcher{constructor(e,t){this._libraryPromise=new Promise(((e,t)=>{this.libraryResolver=e,this.libraryRejecter=t})),this.fetch(e,t)}async fetch(e,t){let r;try{const t=new Request(e),a=new URL(t.url);if(!a.host.endsWith(window.location.host)&&!a.host.endsWith("matterport.com")&&!a.host.endsWith("matterportvr.cn"))return void this.libraryRejecter(`Request made for ${a.href} does not have the same origin as the request origin ${window.location.origin}`);r=await fetch(new Request(e,{}))}catch(e){return void this.libraryRejecter(e)}if(!r.ok)return void this.libraryRejecter("Script not found.");const a={},o=await r.text();if(new Function(o).call(a),t&&t in window){const e=window[t]||{};Object.assign(a,e),delete window[t]}this.libraryResolver(a)}get library(){return this._libraryPromise}}},56943:(e,t,r)=>{"use strict";function a(e,t){return Object.values(e).includes(t)}r.d(t,{p:()=>a})}}]);