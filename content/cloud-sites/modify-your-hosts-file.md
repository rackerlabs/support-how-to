---
node_id: 629
title: Modify your hosts file
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2016-01-21'
last_modified_by: Rose Contreras
product: Cloud Sites
product_url: cloud-sites
---

Modificar seu arquivo hosts permite que voc&ecirc; substitua o dom&iacute;nio DNS em
uma determinada m&aacute;quina. Isso pode ser usado para avaliar o seu site sem
o link de teste antes de ir ao vivo com o SSL, verificar se o alias de
um local funciona antes de altera&ccedil;&otilde;es de DNS, ou por outros motivos
relacionados com o DNS. Isso faz com que sua m&aacute;quina local somente se
conecte diretamente com o IP especificado.

Seu arquivo hosts precisa de duas entradas secund&aacute;rias que cont&ecirc;m o
endere&ccedil;o IP do site que voc&ecirc; deseja mostrar e o endere&ccedil;o. Adicionar as
duas linhas a seguir, por exemplo,
[www.dominio.com](http://www.dominio.com) e dominio.com aponta direto ao
nosso PHP5-ITK cluster ("Refreshed" PHP5))

    64.49.219.194 www.domain.com
    64.49.219.194 domain.com

Abaixo detalhes de como localizar e editar o arquivo hosts em diferentes
sistemas operacionais. Uma vez que as informa&ccedil;&otilde;es de um dom&iacute;nio s&atilde;o
adicionadas, salve o arquivo e o sistema come&ccedil;ar&aacute; a enviar ao IP
especificado. Ap&oacute;s os testes, estas entradas devem ser removidas.

-   [Windows 8, Windows 7, and Windows Vista](#Windows_Vista)
-   [Windows NT, Windows 2000, and Windows XP](#Windows_NT2000XP)
-   [Linux](#Linux)
-   [Mac OS X 10.0 through 10.1.5](#Mac_OS_X_100_through_1015)
-   [Mac OS X 10.6 through 10.8](#macosx10.6)

Windows 8, Windows 7, e Windows Vista
-------------------------------------

Windows 8, Windows 7 e Windows Vista usam o Controle de Conta de Usu&aacute;rio
(UAC, sua sigla em Ingl&ecirc;s), de modo que o notebook deve ser executado
como Administrador.

### Para Windows 8

1.  Pressione a tecla Windows.
        Escreva notepad no campo de pesquisa.
        No campo de pesquisa, pressione o bot&atilde;o direito do mouse sobre
    Bloco de notas e selecione Executar como administrador.
        No bloco de notas, abra o arquivo a seguir:
        C: \\ Windows \\ System32 \\ drivers \\ etc \\ hosts
        Fa&ccedil;a as altera&ccedil;&otilde;es necess&aacute;rias no arquivo hosts.
        Pressione Arquivo -&gt; Salvar para salvar as altera&ccedil;&otilde;es.


### For Windows 7 and Windows Vista

    Clique Iniciar&gt; Todos os Programas&gt; Acess&oacute;rios.
    Clique com o bot&atilde;o direito do mouse Bloco de notas e selecione
Executar como administrador.
    Clique em Continuar na janela do UAC "Windows precisa da sua
permiss&atilde;o".
    Quando o bloco de notas abrir, clique em Arquivo -&gt; Abrir.
    No campo Nome do arquivo, digite:
    C: \\ Windows \\ System32 \\ drivers \\ etc \\ hosts
    Clique Abrir.
    Fa&ccedil;a as altera&ccedil;&otilde;es necess&aacute;rias no arquivo hosts.
    Clique Arquivo -&gt; Salvar para salvar as altera&ccedil;&otilde;es.

Windows NT, Windows 2000, and Windows XP
----------------------------------------

1.  Clique Iniciar -&gt; Todos os Programas&gt; Acess&oacute;rios -&gt; Bloco
    de Notas.
        Clique File-&gt; Open.
        No campo Nome do arquivo, digite:
        C: \\ Windows \\ System32 \\ drivers \\ etc \\ hosts
    Clique Abrir.
        Fa&ccedil;a as altera&ccedil;&otilde;es necess&aacute;rias  no arquivo hosts.
        Clique Arquivo -&gt; Salvar para salvar as altera&ccedil;&otilde;es.

Linux
-----

1\. Abra uma janela de terminal.

2. Abra o arquivo hosts em um editor de texto (voc&ecirc; pode usar qualquer
editor de texto):

sudo nano / etc / hosts

3. Digite sua senha

4. Fa&ccedil;a as altera&ccedil;&otilde;es necess&aacute;rias no arquivo hosts.

5. Pressione control X (Clique CTRL e pressione X) e, em seguida, clique
quando perguntado se voc&ecirc; deseja salvar as altera&ccedil;&otilde;es.


Mac OS X 10.0 through 10.1.5
----------------------------

1.  1\. Abra **/Applications/Utilities/NetInfo Manager**..

    2. Para permitir a edi&ccedil;&atilde;o do banco de dados do NetInfo, clique no
    cadeado no canto inferior esquerdo da janela.

    3. Digite sua senha e pressione OK.

    4. Na segunda coluna da janela do navegador, selecione o n&oacute;(node)
    chamado `machines`. Voc&ecirc; ver&aacute; -DHCP-, BroadcastHost, e localhost na
    terceira coluna.

    5. Selecione o elemento de localhost na terceira coluna.

    6. Escolha Duplicar no menu Editar (o caminho mais r&aacute;pido para criar uma
    nova entrada &eacute; duplicar uma existente). Um alerta de confirma&ccedil;&atilde;o
    aparece.

    7. Pressione Duplicar. Uma nova entrada chamada **localhost copia** e
    suas propriedades s&atilde;o mostradas abaixo da janela do browser.

    8. Pressione duas vezes o valor da propriedade ip\_address e digite o
    endere&ccedil;o IP do outro computador.

    9. Prima duas vezes o valor da propriedade de nome e digite o nome do
    host que voc&ecirc; deseja para o outro computador.

    Serve 10. Pressione a propriedade e escolha Excluir no menu Editar.

    11. Clique em Salvar no menu Arquivo. alerta de confirma&ccedil;&atilde;o aparece.

    12. Clique em Atualizar essa c&oacute;pia.

    13. Repita os passos de 6 a 12 para cada entrada de host adicional que
    voc&ecirc; deseja adicionar.

    14. Selecione Sair do menu de NetInfo Manager. N&atilde;o h&aacute; necessidade de
    reiniciar o computador.


Mac OS X 10.6 - 10.8
--------------------

1.  1\. Abra Aplicativos&gt; Utilit&aacute;rios&gt; Terminal.

    2. Abra o arquivo hosts, digitando o seguinte na janela Terminal:

    sudo nano / privado / etc / hosts

    Digite sua senha quando solicitado.

    3. Edite o arquivo hosts. O arquivo hosts cont&eacute;m coment&aacute;rios (linhas que
    come&ccedil;am com \#), e alguns nomes de host de mapeamento padr&atilde;o (por
    exemplo, 127.0.0.1 - host local). Fixe seus novos mapeamentos abaixo os
    mapeamentos padr&atilde;o.

    4. Salve o arquivo hosts pressionando Control + xy e resposta.

    5. Para que as altera&ccedil;&otilde;es tenham efeito, esvaziar o cache DNS com o
    seguinte comando:

    dscacheutil -flushcache

    6. Agora, aplique o novo mapeamento.



. Para que se apliquen sus cambios, vac&iacute;e la cach&eacute; del DNS con el
siguiente comando:

    dscacheutil -flushcache

6\. Ahora se aplicar&aacute;n los nuevos mapeos.

