

function formatText(index, panel) {
	return index + "";
};

function irSlider(numero){

	$('.anythingSlider').anythingSlider(numero);
	$('#slide-jump_1').removeClass('selected');	
	$('#slide-jump_2').removeClass('selected');
	$('#slide-jump_3').removeClass('selected');
			

	$('#slide-jump_'+numero).addClass('selected');

}

function addSizeBody(nivel){
	//alert(nivel);
	 var _caja = $('#content');
	 var sizeFuenteOriginal = "16px";
	 
	
	 if (nivel==0){
		 _caja.css('font-size', sizeFuenteOriginal);
	 }
	
	 if (nivel==1){
		 var sizeFuenteActualNum = parseFloat(sizeFuenteOriginal, 10);
		 var sizeFuenteNuevo = sizeFuenteActualNum*1.1;
		
		 _caja.css('font-size', sizeFuenteNuevo);
	 }
	 
	 if (nivel==2){
		 var sizeFuenteActualNum = parseFloat(sizeFuenteOriginal, 10);
		 var sizeFuenteNuevo = sizeFuenteActualNum*1.2;
		 _caja.css('font-size', sizeFuenteNuevo);
	 }
	
	return false;
	
}

function _modulo_resetGPV(){
	
	$("#_modulo_posgrado").hide();
	$("#_modulo_virtual").hide();
	
}

function _modulo_onGPV(index,total, tipo){
	
	$("#_modulo_grado").hide();
	$("#_modulo_posgrado").hide();
	$("#_modulo_virtual").hide();
	for (i=0;i<total;i++){
		$("#_modulo_solapa_"+i).removeClass("active").addClass("");
	}
	
	$("#_modulo_solapa_"+index).addClass("active");
	$("#_modulo_"+tipo).fadeIn(1000);
	
	return false;
}

function _modulo_onResetTextCombos(modulo) {
	//alert("ss");
	//$('#moduloCarreras_'+modulo).text("ss");
	
}

function habilitar_solapa_catalogo(index){
	if ($("#solapa_catalogo_1")){
		$("#solapa_catalogo_1").removeClass("active").addClass("");
	}
	if ($("#solapa_catalogo_2")){
		$("#solapa_catalogo_2").removeClass("active").addClass("");
	}
	if ($("#solapa_catalogo_"+index)){
		$("#solapa_catalogo_"+index).removeClass("").addClass("active");
	}

	
	if ($("#lista_1")){
		$("#lista_1").hide();
	}
	if ($("#lista_2")){
		$("#lista_2").hide();
	}

	if ($("#lista_"+index)){
		$("#lista_"+index).fadeIn(500)
	}

	return false;

	
}

function _jx_multimediaLista(pagina,seccion,tipo,id_canal){
	
	$("#_multimedia_lista").load("includes/modulos/multimedia/_jx_multimedia_lista.php", {_pagina: pagina,_seccion: seccion,_tipo: tipo,_id_canal: id_canal}, function(){
		
		//$("#_news_right_error").hide();
	//$("#_news_right_exito").show(200);
	});
	
	
	
}
function _jx_multimediaItem(tipo,id,src,url,titulo){
	
	$("#_multimedia_item").load("includes/modulos/multimedia/_jx_multimedia_item.php", {_tipo: tipo,_id: id,_src: src,_url: url,_titulo: titulo}, function(){
		
		//$("#_news_right_error").hide();
		//$("#_news_right_exito").show(200);
	});
	
}

function habilitar_multimedia_item(index,total){
	
	
	
	for (i=0;i<total;i++){
		$('#_multimedia_lista_'+i).removeClass("celda active").addClass("celda");
	}
	
	$('#_multimedia_lista_'+index).addClass("celda active");
	
}

function verMenuArbol(id_seccion){
	
	var padre1	= $('#_lista_A'+id_seccion).parents();
	var padre11	=padre1.parents();
	var padre12	=padre11.parents();
	var padre13	=padre12.parents();
	var padre14	=padre13.parents();
	
	var hijo1 	= $('#_lista_A'+id_seccion).children();
	var hijo11 	= hijo1.children();
	var hijo12 	= hijo11.children();
	var hijo13 	= hijo12.children();
	
	$('#_lista_A'+id_seccion).show();
	
	$("#_lista_A"+id_seccion+" > ul > li").show();

	if (padre1.attr('id')!=""){
		$("#"+padre1.attr('id')+" > ul > li").show();
		
	}
	if (padre11.attr('id')!=""){
		$("#"+padre11.attr('id')+" > ul > li").show();
	}
	if (padre12.attr('id')!=""){
		$("#"+padre12.attr('id')+" > ul > li").show();
	}
	if (padre13.attr('id')!=""){
		$("#"+padre13.attr('id')+" > ul > li").show();
	}

	if (padre14.attr('id')!=""){
		$("#"+padre14.attr('id')+" > ul > li").show();
	}
	
	
}

