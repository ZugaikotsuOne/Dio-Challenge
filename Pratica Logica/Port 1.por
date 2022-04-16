//--- Função do algoritomo calcular uma media aritimética de 4 meses---//

programa
{
	
	funcao inicio()
	{
		real janeiro,fevereiro,marco,abril,media
		cadeia proletario


		escreva("Digite o nome do proletario: ")
		leia(proletario)
		escreva("Nome do proletario é: " + proletario)


		escreva(" Digite a janeiro:")
		leia(janeiro)
          escreva(" Digite a fevereiro:")
		leia(fevereiro)
		escreva(" Digite a março:")
		leia(marco)
		escreva(" Digite a abril:")
		leia(abril)
		
          media = (janeiro+fevereiro+marco+abril)/4

          escreva(" O Proletario: " + proletario + " Ganho medio no ultimo quarter: " + media)

//---Boleano para verificar media maior ou menor que 300---//
  
          se (media>=300) {
          escreva("\n" + "Parabéns ta lucrando oque sabe agora cade meu pix")
          }
          
          senao {
          escreva("\n" + "Parabéns ta lucrando nada seu nome ta no SPC Serassa agora :D")
          }
          
          
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 984; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */