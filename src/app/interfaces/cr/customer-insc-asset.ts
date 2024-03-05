export interface CustomerInscAsset {
    ciasPoliceNumber: string;
    ciasYear: string;
    ciasStartdate: string;
    ciasEnddate: string | null;
    ciasCurrentPrice: string;
    ciasInsurancePrice: string | null;
    ciasTotalPremi: string | null;
    ciasPaidType: string;
    ciasIsNewChar: string;
    ciasCarsId: number;
    ciasIntyName: string;
    ciasCityId: number;
}
