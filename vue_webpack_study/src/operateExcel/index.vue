<template>
    <div>
        <h1>xlsx</h1>
        <input type="file" id="uploadExcel" multiple @change="handleInputChange" />
        <br/>
        <table>
            <thead>
                <th v-for="item in header">{{item}}</th>
            </thead>
            <tbody>
                <tr v-for="(row, idx) in result" :key="idx">
                <td v-for="key in header">{{ row[key] }}</td>
                </tr>
            </tbody>
            <tfoot>
                <td colSpan={2}>
                    <button @click="handleExportFile">Export XLSX</button>
                </td>
            </tfoot>
        </table>
    </div>
</template>

<script>
    import { read, utils, writeFileXLSX } from 'xlsx';
   export default {
       name: 'OperateExcel',
       data() {
           return {
               header: [],
               result: [],
           };
       },
       methods: {
           handleInputChange(e) {
               const that = this;
               const fileList = e.target.files;
               console.log('fileList...............', fileList);
               let reader = new FileReader();
               reader.onload = function(e){
                  let data = e.target.result;
                  console.log('data...............', data);
                  const wb = read(data);
                  console.log('wb...............', wb);
                  that.result = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
                  that.header = Object.keys(that.result[0]);
               };
               reader.readAsArrayBuffer(fileList[0]);
           },
           handleExportFile() {
               console.log('handleExportFile...............', this.result);
               const ws1 = utils.json_to_sheet(this.result.slice(0, 10));
               const ws2 = utils.json_to_sheet(this.result.slice(10));
                const wb = utils.book_new();
                utils.book_append_sheet(wb, ws1, "sheet1");
                utils.book_append_sheet(wb, ws2, "sheet2");
                writeFileXLSX(wb, "yyds.xlsx");
           },
        }
   }
</script>