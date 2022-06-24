/*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //etapa 1
  //console.log('Bem-vinda, ' + info.personagem);

  //etapa 2
  info.recorrente = 'sim'
  //console.log(info);

  //etapa 3
  /*for (let chave in info) {
    console.log(chave);
    }*/

//etapa 4
    /*for (let chave in info) {
        console.log(info[chave]);
    }*/

//etapa 5
/*let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente : 'sim' 
  };

  

  for (let properties in info) {
    if (
      properties === 'recorrente' &&
      info[properties] === 'sim' &&
      info2[properties] === 'sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
  }*/

  //etapa 6
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
    
  };

  console.log('O livro favorito da ' + leitor.nome + ' se chama ' + leitor.livrosFavoritos[0].titulo);
  

  //etapa 7
  leitor.livrosFavoritos.push(
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    },
  );

  console.log('Julia tem ' + leitor.livrosFavoritos.length + ' livros favoritos');