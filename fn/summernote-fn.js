$scope.refresca = function()
{
    var html = $scope.getHTML();
    console.log("html:" + html);
}
$scope.setearHTML = function(idSummernote, texto)
{
    // VERIFICA QUE TENGA UN HASHTAG ADELANTE SINO LO AGREGA:
    if(!idSummernote.startsWith("#"))
    {
        idSummernote = "#" + idSummernote;
    }

    console.log("SETEANDO SUMMERNOTE: " + idSummernote + " -> " + texto);

    if(texto != null)
    {
        console.log("seteando: " + texto);

        $(idSummernote).summernote('code', texto);
        // $('#summernote').summernote('code', texto);
    }
    else
    {
        $(idSummernote).summernote('code', texto);
        // $('#summernote').summernote('code', "");
    }
}
$scope.getHTML = function(idSummernote)
{
        // VERIFICA QUE TENGA UN HASHTAG ADELANTE SINO LO AGREGA:
    if(!idSummernote.startsWith("#"))
    {
        idSummernote = "#" + idSummernote;
    }

    var markupStr = $(idSummernote).summernote('code');

    // var markupStr = $('#summernote').summernote('code');
    //console.log("VALOR: " + markupStr);
    
    return markupStr;
}