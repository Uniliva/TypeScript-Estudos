class MensagemView extends Views<string>{

     _template(msg:String):string{
        return `<p class="alert alert-info"><strong>Msg:</strong> ${msg}</p> `;
    }

   
}