import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: "table",
    width: "auto",
    fontSize: "12px",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableHead: {
    flexDirection: "row",

    backgroundColor: "orange",
    color: "white",
  },

  tableCol: {
    width: "16.66%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    fontSize: 10,
    padding: 5,
  },
  flex: {
    flexWrap: "wrap",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 10,
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    borderTopWidth: 5, // Tambahkan garis bawah
    borderTopColor: "black", // Warna garis bawah
  },
  header: {
    textAlign: "left",
    fontWeight: "extrabold", // Menggunakan "bold" sebagai nilai fontWeight
    fontSize: 25,    width: 20,
    fontFamily: "Helvetica-Bold", // Set font family to Helvetica-Bold
    
  },
  subHeader: {
    textAlign: "left",
    fontSize: 10.5,
  },
});

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Pirung</Text>
        <Text style={styles.subHeader}>pinjam ruang</Text>
        <Text style={styles.title}></Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: 10,
            fontFamily: "Helvetica-Bold",
          }}
        >
          DATA PENGGUNAAN RUANGAN
        </Text>
        <View style={styles.table}>
          <View style={styles.tableHead}>
            <View style={styles.tableCol}>
              <Text>Mahasiswa</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>Nim</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>Ruangan</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>Kompetensi</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>Dosen</Text>
            </View>
            <View style={styles.tableCol}>
              <Text> Jam</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>Tanggal waktu</Text>
            </View>
          </View>
          {data.map((res) => {
            return (
              <>
                <View key={res.mahasiswa} style={styles.tableRow}>
                <View style={styles.tableCol}>
                    <Text>{res.mahasiswa}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text>{res.nim}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text>{res.ruangan}</Text>
                  </View>
                  
                  <View style={styles.tableCol}>
                    <Text>{res.kompetensi}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text>{res.dosen}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text>
                      {res.jam_mulai} - {res.jam_selesai}
                    </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text>{res.tanggal}</Text>
                  </View>
                </View>
              </>
            );
          })}
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </View>
    </Page>
  </Document>
);

export const Exportpdf = () => {
  const [data, setdata] = useState(null);
  const setdataa = () => {
    setdata(JSON.parse(localStorage.getItem("exportDataRuangan")));
  };
  useEffect(() => {
    setdataa();
    return () => {
      if (data) {
        // localStorage.removeItem("exportDataRuangan");
      }
    };
  }, []);
  document.title= "Rekap Ruangan"
  if (data) {
    return (
      <PDFViewer style={{ width: "100vw", height: "100vh" }}>
        <MyDocument data={data} />
      </PDFViewer>
    );
  }
};
