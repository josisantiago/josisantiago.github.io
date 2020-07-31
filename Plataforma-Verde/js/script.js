function selecionaEstado(form_teste) {
   const nome_select = document.querySelector("#nome");
   if (form_teste.nome.value=="")
    {
        alert ("Por favor selecione o estado.");
        return false;
    }
}

    function buscaCidades(e){
   const cidade_select = document.querySelector("#cidade");
    cidade_select.innerHTML = '';
    const estados_cidades_filtered = estados_cidades.filter(item => item.sigla === e)
     if (estados_cidades_filtered[0]){
        estados_cidades_filtered[0].cidades.forEach(cidade => {
           const cid_opts = document.createElement('option');
           cid_opts.setAttribute('value',cidade)
           cid_opts.innerHTML = cidade;
           cidade_select.appendChild(cid_opts);
        })
     }
}

