import { Process } from '../interfaces/process.interface';

export class CreateProcessDto implements Omit<Process, 'id'> {
  codigoLicitacao: string;
  identificacao: string;
  numero: string;
  resumo: string;
  codigoSituacaoEdital: number;
  codigoStatus: number;
  dataHoraInicioLances: Date;
}
