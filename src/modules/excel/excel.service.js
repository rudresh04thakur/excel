const fs = require('fs');
const xlsx = require('xlsx'); 
const  path = require('path');
const ExcelService = {
  /**
   * Logs in a user and generates a token.
   * @async
   * @function
   * @param {ExcelDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} If the user is not found.
   */
  readExcel: async (requestBody) => {
    const workbook = xlsx.readFile('src/public/uploads/data.xlsx');  
    let workbook_sheet = workbook.SheetNames;                
    let workbook_response = xlsx.utils.sheet_to_json(
      workbook.Sheets[workbook_sheet[0]]
    );
    return workbook_response;
  },
};

module.exports = ExcelService;
