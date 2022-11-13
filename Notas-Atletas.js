let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
]; 
atletas.forEach((dadosDosAtletas) => dadosDosAtletas.notas.sort((a,b)=> a-b)
)
 atletas.forEach(function(dadosDosAtletas){
   console.log(`Atleta: ${dadosDosAtletas.nome}`)
   console.log(`Notas Obtidas ${dadosDosAtletas.notas()}`)
   let notasComputadas = dadosDosAtletas.notas.slicer(1, dadosDosAtletas.notas.length -1)
   console.log(`Media Valida: ${notasComputadas.reduce((a,b) => a + b, 0) / notasComputadas.length}`)
   conole.log()
 })
