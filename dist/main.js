var columnDefs = [
  { headerName: "", field: "type", cellRenderer: "TreeCellRenderer" },
  { headerName: "dec", field: "dec" },
  { headerName: "nov", field: "nov" },
  { headerName: "oct", field: "oct" },
  { headerName: "sep", field: "sep" },
  { headerName: "aug", field: "aug" },
  { headerName: "jul", field: "jul" },
  { headerName: "jun", field: "jun" },
  { headerName: "may", field: "may" },
  { headerName: "apr", field: "apr" }
];

let showBlankForExpanded = !0,
  blankForExpandedObject = {
    dec: "",
    nov: "",
    oct: "",
    sep: "",
    aug: "",
    jul: "",
    jun: "",
    may: "",
    apr: ""
  };
var rowData = [
  {
    type: "balance sheet",
    dec: "12312",
    nov: "2321232",
    oct: "231231",
    sep: "234334",
    aug: "343453",
    jul: "34534534",
    jun: "34534534",
    may: "3452332",
    apr: "1245665",
    children: [
      {
        type: "Assets",
        dec: "123123",
        nov: "2323",
        oct: "87",
        sep: "45654",
        aug: "34534",
        jul: "34534",
        jun: "342",
        may: "8767",
        apr: "567576",
        children: [
          {
            type: "Motgage loans held for investment, net",
            dec: "1",
            nov: "2",
            oct: "3",
            sep: "4",
            aug: "55",
            jul: "6",
            jun: "45",
            may: "34",
            apr: "12",
            children: [
              {
                type: "xyz",
                dec: "5454",
                nov: "3434",
                oct: "2323",
                sep: "12",
                aug: "8787",
                jul: "67567",
                jun: "656",
                may: "45645",
                apr: "6567",
                children: []
              }
            ]
          },
          {
            type: "claims receivables, net",
            dec: "121",
            nov: "221",
            oct: "321",
            sep: "421",
            aug: "5521",
            jul: "621",
            jun: "4521",
            may: "3421",
            apr: "1221",
            children: [
              {
                type: "abc",
                dec: "988",
                nov: "787",
                oct: "676",
                sep: "5656",
                aug: "454",
                jul: "343",
                jun: "232",
                may: "121",
                apr: "3434",
                children: []
              }
            ]
          },
          {
            type: "acquired property, net",
            dec: "12551",
            nov: "22551",
            oct: "32551",
            sep: "42551",
            aug: "552551",
            jul: "62551",
            jun: "452551",
            may: "342551",
            apr: "122551",
            children: [
              {
                type: "1789989 REO properties",
                dec: "33",
                nov: "22",
                oct: "22",
                sep: "65",
                aug: "44",
                jul: "898",
                jun: "676",
                may: "5656",
                apr: "4545",
                children: [
                  {
                    type: "1787099 npa clearing account - reo",
                    dec: "5434345",
                    nov: "34534",
                    oct: "1232321",
                    sep: "2312657657",
                    aug: "565534",
                    jul: "2345465",
                    jun: "998788",
                    may: "3456",
                    apr: "456676",
                    children: [
                      {
                        type: "18999882 reo properties accounting adjustment",
                        dec: "5434345",
                        nov: "34534",
                        oct: "1232321",
                        sep: "2312657657",
                        aug: "565534",
                        jul: "2345465",
                        jun: "998788",
                        may: "3456",
                        apr: "456676",
                        children: [
                          {
                            type: "18999882 01  roc reo properties",
                            dec: "34345",
                            nov: "534",
                            oct: "12321",
                            sep: "237657",
                            aug: "5634",
                            jul: "2365",
                            jun: "9988",
                            may: "346",
                            apr: "476",
                            children: []
                          },
                          {
                            type: "18999882 02  reo properties carry over",
                            dec: "23",
                            nov: "53",
                            oct: "121",
                            sep: "27657",
                            aug: "534",
                            jul: "265",
                            jun: "988",
                            may: "36",
                            apr: "46",
                            children: []
                          },
                          {
                            type: "18999882 03  reo day 1 cost bases",
                            dec: "233",
                            nov: "533",
                            oct: "1221",
                            sep: "2757",
                            aug: "54",
                            jul: "25",
                            jun: "9288",
                            may: "326",
                            apr: "436",
                            children: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: "Liablities",
        dec: "345",
        nov: "45",
        oct: "4545",
        sep: "4545",
        aug: "4545",
        jul: "4545",
        jun: "4545",
        may: "4545",
        apr: "4545",
        children: []
      },
      {
        type: "Equity",
        dec: "123",
        nov: "32123123",
        oct: "2323",
        sep: "3232",
        aug: "324545",
        jul: "4534534",
        jun: "2343435",
        may: "345345",
        apr: "987888",
        children: []
      }
    ]
  },
  {
    type: "Incom statement",
    dec: "8765",
    nov: "34453",
    oct: "34534",
    sep: "345345",
    aug: "3453467",
    jul: "098",
    jun: "5675",
    may: "456",
    apr: "34534",
    children: []
  }
];

let idCount = 0;
add_id_to_data_rows(rowData);

let id_to_data_dict = {};
create_id_to_data_item_map(rowData, id_to_data_dict);

class TreeCellRenderer{
  init(e) {
    this.eGui = document.createElement("span");
    this.eGui.style = `padding-left:${e.data.level}px`;
    if (e.data.children.length>0) {
        if (e.data.expanded) {
          this.eGui.innerHTML = '- ' + e.value;
        } else {
          this.eGui.innerHTML = '+ ' + e.value;
        }
    } else {
      this.eGui.innerHTML = e.value;
    }
    this.eventListener = function(){ updateData(e.data.id); };
    this.eGui.addEventListener("click", this.eventListener);
  }

  getGui() {
    return this.eGui;
  }
}



var gridOptions = {
  columnDefs: columnDefs,
  defaultColDef: { sortable: !0, resizable: !0 },
  components: { TreeCellRenderer: TreeCellRenderer },
  rowData: rowData
};

function updateData(data_id) {
  let data_item = id_to_data_dict[data_id];
  if (data_item){
    data_item.expanded = !data_item.expanded;
    rowDataExpanded = [];
    makeDataResurcive(rowData, 0);
    gridOptions.api.setRowData(rowDataExpanded);
  }
}

function makeDataResurcive(e, a) {
  e.forEach(e => {
    (e.level = a),
      e.children.length > 0 &&
        e.expanded &&
        showBlankForExpanded &&
        (e = { ...e, ...blankForExpandedObject }),
      rowDataExpanded.push(e),
      e.expanded && makeDataResurcive(e.children, a + 10);
  });
}

function add_id_to_data_rows(data_record_list) {
  data_record_list.forEach(data_item => {
    data_item.id = idCount;
    data_item.expanded=false;
    idCount++;
    add_id_to_data_rows(data_item.children);
  });
}

function create_id_to_data_item_map(data_record_list, dict) {
  data_record_list.forEach(data_item => {
    dict[data_item.id] = data_item;
    create_id_to_data_item_map(data_item.children, dict);
  });
}


document.addEventListener("DOMContentLoaded", function() {
  var e = document.querySelector("#myGrid");
  new agGrid.Grid(e, gridOptions), gridOptions.api.sizeColumnsToFit();
});