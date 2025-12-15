import { useCallback } from 'react';

interface ColumnDefinition<T> {
  header: string;
  accessor: (row: T) => string | number | boolean | null | undefined;
  formatter?: (value: string | number | boolean | null | undefined) => string;
}

export const useExportToExcel = <T extends object>() => {
  const exportToCsv = useCallback((data: T[], columns: ColumnDefinition<T>[], filename: string = 'dados_exportados') => {
    if (!data || data.length === 0) {
      console.warn('Nenhum dado para exportar.');
      return;
    }

    const csvRows = [];

    // Adiciona os cabeçalhos
    const headers = columns.map(col => col.header);
    csvRows.push(headers.join(';'));

    // Adiciona as linhas de dados
    data.forEach(row => {
      const values = columns.map(col => {
        let value = col.accessor(row);
        if (col.formatter) {
          value = col.formatter(value);
        } else if (typeof value === 'string') {
          // Escapa aspas duplas e envolve em aspas para strings
          value = `"${value.replace(/"/g, '""')}"`;
        } else if (typeof value === 'number') {
          // Formata números para usar vírgula como separador decimal
          value = value.toString().replace('.', ',');
        } else if (typeof value === 'boolean') {
          value = value ? 'Verdadeiro' : 'Falso';
        } else if (value === null || value === undefined) {
          value = '';
        }
        return value;
      });
      csvRows.push(values.join(';'));
    });

    const csvString = '\uFEFF' + csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `${filename}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      console.error('O atributo download não é suportado pelo navegador.');
    }
  }, []);

  return { exportToCsv };
};