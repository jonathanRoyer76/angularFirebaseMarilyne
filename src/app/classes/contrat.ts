export class Contrat {
    tauxHoraireBrut     : number =0
    tauxHoraireNet      : number =0
    nbSemainesGardeAn   : number =0
    nbHeuresGardeSemaine: number =0
    nbJoursGardeSemaine : number =0
    montantRepas        : number =0
    montantIndemnites   : number =0
    montantGouter       : number =0
    baremeKm            : number =0
    salaireBaseBrut     : number =0
    salaireBaseNet      : number =0
    congesPayesBaseBrut : number =0
    congesPayesBaseNet  : number =0
    salaireTotalBaseBrut: number =0
    salaireTotalBaseNet : number =0
    dateDebut           : Date
    dateFin             : Date
    moyNbJoursGardeMois : number =0
    moyNbHeuresGardeMois: number =0
}