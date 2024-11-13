var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_googlesattelites_1 = new ol.layer.Tile({
            'title': 'google sattelites',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KELURAHAN_POLY_2 = new ol.format.GeoJSON();
var features_KELURAHAN_POLY_2 = format_KELURAHAN_POLY_2.readFeatures(json_KELURAHAN_POLY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KELURAHAN_POLY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELURAHAN_POLY_2.addFeatures(features_KELURAHAN_POLY_2);
var lyr_KELURAHAN_POLY_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KELURAHAN_POLY_2, 
                style: style_KELURAHAN_POLY_2,
                interactive: true,
                title: '<img src="styles/legend/KELURAHAN_POLY_2.png" /> KELURAHAN_POLY'
            });
var format_SD_NEGERI_3 = new ol.format.GeoJSON();
var features_SD_NEGERI_3 = format_SD_NEGERI_3.readFeatures(json_SD_NEGERI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SD_NEGERI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SD_NEGERI_3.addFeatures(features_SD_NEGERI_3);
var lyr_SD_NEGERI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SD_NEGERI_3, 
                style: style_SD_NEGERI_3,
                interactive: true,
                title: '<img src="styles/legend/SD_NEGERI_3.png" /> SD_NEGERI'
            });
var format_SD_SWASTA_4 = new ol.format.GeoJSON();
var features_SD_SWASTA_4 = format_SD_SWASTA_4.readFeatures(json_SD_SWASTA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SD_SWASTA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SD_SWASTA_4.addFeatures(features_SD_SWASTA_4);
var lyr_SD_SWASTA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SD_SWASTA_4, 
                style: style_SD_SWASTA_4,
                interactive: true,
                title: '<img src="styles/legend/SD_SWASTA_4.png" /> SD_SWASTA'
            });
var format_SLB_5 = new ol.format.GeoJSON();
var features_SLB_5 = format_SLB_5.readFeatures(json_SLB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLB_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLB_5.addFeatures(features_SLB_5);
var lyr_SLB_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLB_5, 
                style: style_SLB_5,
                interactive: true,
                title: '<img src="styles/legend/SLB_5.png" /> SLB'
            });
var format_SLB_NEGERI_6 = new ol.format.GeoJSON();
var features_SLB_NEGERI_6 = format_SLB_NEGERI_6.readFeatures(json_SLB_NEGERI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLB_NEGERI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLB_NEGERI_6.addFeatures(features_SLB_NEGERI_6);
var lyr_SLB_NEGERI_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLB_NEGERI_6, 
                style: style_SLB_NEGERI_6,
                interactive: true,
                title: '<img src="styles/legend/SLB_NEGERI_6.png" /> SLB_NEGERI'
            });
var format_SMA_NEGERI_7 = new ol.format.GeoJSON();
var features_SMA_NEGERI_7 = format_SMA_NEGERI_7.readFeatures(json_SMA_NEGERI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMA_NEGERI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMA_NEGERI_7.addFeatures(features_SMA_NEGERI_7);
var lyr_SMA_NEGERI_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMA_NEGERI_7, 
                style: style_SMA_NEGERI_7,
                interactive: true,
                title: '<img src="styles/legend/SMA_NEGERI_7.png" /> SMA_NEGERI'
            });
var format_SMA_SWASTA2_8 = new ol.format.GeoJSON();
var features_SMA_SWASTA2_8 = format_SMA_SWASTA2_8.readFeatures(json_SMA_SWASTA2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMA_SWASTA2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMA_SWASTA2_8.addFeatures(features_SMA_SWASTA2_8);
var lyr_SMA_SWASTA2_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMA_SWASTA2_8, 
                style: style_SMA_SWASTA2_8,
                interactive: true,
                title: '<img src="styles/legend/SMA_SWASTA2_8.png" /> SMA_SWASTA2'
            });
var format_SMP_NEGERI_9 = new ol.format.GeoJSON();
var features_SMP_NEGERI_9 = format_SMP_NEGERI_9.readFeatures(json_SMP_NEGERI_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMP_NEGERI_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMP_NEGERI_9.addFeatures(features_SMP_NEGERI_9);
var lyr_SMP_NEGERI_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMP_NEGERI_9, 
                style: style_SMP_NEGERI_9,
                interactive: true,
                title: '<img src="styles/legend/SMP_NEGERI_9.png" /> SMP_NEGERI'
            });
var format_SMP_SWASTA_10 = new ol.format.GeoJSON();
var features_SMP_SWASTA_10 = format_SMP_SWASTA_10.readFeatures(json_SMP_SWASTA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMP_SWASTA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMP_SWASTA_10.addFeatures(features_SMP_SWASTA_10);
var lyr_SMP_SWASTA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMP_SWASTA_10, 
                style: style_SMP_SWASTA_10,
                interactive: true,
                title: '<img src="styles/legend/SMP_SWASTA_10.png" /> SMP_SWASTA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_googlesattelites_1.setVisible(true);lyr_KELURAHAN_POLY_2.setVisible(true);lyr_SD_NEGERI_3.setVisible(true);lyr_SD_SWASTA_4.setVisible(true);lyr_SLB_5.setVisible(true);lyr_SLB_NEGERI_6.setVisible(true);lyr_SMA_NEGERI_7.setVisible(true);lyr_SMA_SWASTA2_8.setVisible(true);lyr_SMP_NEGERI_9.setVisible(true);lyr_SMP_SWASTA_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_googlesattelites_1,lyr_KELURAHAN_POLY_2,lyr_SD_NEGERI_3,lyr_SD_SWASTA_4,lyr_SLB_5,lyr_SLB_NEGERI_6,lyr_SMA_NEGERI_7,lyr_SMA_SWASTA2_8,lyr_SMP_NEGERI_9,lyr_SMP_SWASTA_10];
lyr_KELURAHAN_POLY_2.set('fieldAliases', {'Id': 'Id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', });
lyr_SD_NEGERI_3.set('fieldAliases', {'Nama': 'Nama', 'NSS': 'NSS', 'NPSN': 'NPSN', 'Jns_Pnddkn': 'Jns_Pnddkn', 'Status': 'Status', 'Kode_Wil': 'Kode_Wil', 'Alamat': 'Alamat', 'F8': 'F8', 'RT': 'RT', 'RW': 'RW', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Akreditasi': 'Akreditasi', 'SK_Akred': 'SK_Akred', 'Koord_X': 'Koord_X', 'Kood_Y': 'Kood_Y', });
lyr_SD_SWASTA_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama': 'Nama', 'NSS': 'NSS', 'NPSN': 'NPSN', 'Jns_Pnddkn': 'Jns_Pnddkn', 'Status': 'Status', 'Kode_Wil': 'Kode_Wil', 'Alamat': 'Alamat', 'F8': 'F8', 'RT': 'RT', 'RW': 'RW', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Akreditasi': 'Akreditasi', 'SK_Akred': 'SK_Akred', 'Koord_X': 'Koord_X', });
lyr_SLB_5.set('fieldAliases', {'SLB__Nama': 'SLB__Nama', 'SLB__NSS': 'SLB__NSS', 'SLB__NPSN': 'SLB__NPSN', 'SLB__Jns_P': 'SLB__Jns_P', 'SLB__Statu': 'SLB__Statu', 'SLB__Kode_': 'SLB__Kode_', 'SLB__Alama': 'SLB__Alama', 'SLB__ID': 'SLB__ID', 'SLB__RT': 'SLB__RT', 'SLB__RW': 'SLB__RW', 'SLB__Kelur': 'SLB__Kelur', 'SLB__Kecam': 'SLB__Kecam', 'SLB__Akred': 'SLB__Akred', 'SLB__SK_Ak': 'SLB__SK_Ak', 'Koord_X': 'Koord_X', 'Koord_Y': 'Koord_Y', });
lyr_SLB_NEGERI_6.set('fieldAliases', {'SLB__Nama': 'SLB__Nama', 'SLB__NSS': 'SLB__NSS', 'SLB__NPSN': 'SLB__NPSN', 'SLB__Jns_P': 'SLB__Jns_P', 'SLB__Statu': 'SLB__Statu', 'SLB__Kode_': 'SLB__Kode_', 'SLB__Alama': 'SLB__Alama', 'SLB__ID': 'SLB__ID', 'SLB__RT': 'SLB__RT', 'SLB__RW': 'SLB__RW', 'SLB__Kelur': 'SLB__Kelur', 'SLB__Kecam': 'SLB__Kecam', 'SLB__Akred': 'SLB__Akred', 'SLB__SK_Ak': 'SLB__SK_Ak', 'Koord_X': 'Koord_X', 'Koord_Y': 'Koord_Y', });
lyr_SMA_NEGERI_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'Koord_X': 'Koord_X', 'Koord_Y': 'Koord_Y', 'FID_1': 'FID_1', 'OBJECTID_1': 'OBJECTID_1', 'name_1': 'name_1', 'jenia': 'jenia', 'status': 'status', 'alamat': 'alamat', 'kecamatan': 'kecamatan', 'akreditasi': 'akreditasi', 'kelurahan': 'kelurahan', });
lyr_SMA_SWASTA2_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'Koord_X': 'Koord_X', 'Koord_Y': 'Koord_Y', 'FID_1': 'FID_1', 'OBJECTID_1': 'OBJECTID_1', 'name_1': 'name_1', 'jenia': 'jenia', 'status': 'status', 'alamat': 'alamat', 'kecamatan': 'kecamatan', 'akreditasi': 'akreditasi', 'kelurahan': 'kelurahan', });
lyr_SMP_NEGERI_9.set('fieldAliases', {'akreditasi': 'akreditasi', 'Koord_X': 'Koord_X', 'Koord': 'Koord', 'Koord_Y': 'Koord_Y', 'FID_1': 'FID_1', 'name': 'name', 'jenis': 'jenis', 'status': 'status', 'alamat': 'alamat', 'kelurahan': 'kelurahan', 'kecamatan': 'kecamatan', 'akredita_1': 'akredita_1', });
lyr_SMP_SWASTA_10.set('fieldAliases', {'akreditasi': 'akreditasi', 'Koord_X': 'Koord_X', 'Koord': 'Koord', 'Koord_Y': 'Koord_Y', 'FID_1': 'FID_1', 'name': 'name', 'jenis': 'jenis', 'status': 'status', 'alamat': 'alamat', 'kelurahan': 'kelurahan', 'kecamatan': 'kecamatan', 'akredita_1': 'akredita_1', });
lyr_KELURAHAN_POLY_2.set('fieldImages', {'Id': 'Range', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', });
lyr_SD_NEGERI_3.set('fieldImages', {'Nama': 'TextEdit', 'NSS': 'TextEdit', 'NPSN': 'TextEdit', 'Jns_Pnddkn': 'TextEdit', 'Status': 'TextEdit', 'Kode_Wil': 'TextEdit', 'Alamat': 'TextEdit', 'F8': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Akreditasi': 'TextEdit', 'SK_Akred': 'TextEdit', 'Koord_X': 'TextEdit', 'Kood_Y': 'TextEdit', });
lyr_SD_SWASTA_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama': 'TextEdit', 'NSS': 'TextEdit', 'NPSN': 'TextEdit', 'Jns_Pnddkn': 'TextEdit', 'Status': 'TextEdit', 'Kode_Wil': 'TextEdit', 'Alamat': 'TextEdit', 'F8': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Akreditasi': 'TextEdit', 'SK_Akred': 'TextEdit', 'Koord_X': 'TextEdit', });
lyr_SLB_5.set('fieldImages', {'SLB__Nama': 'TextEdit', 'SLB__NSS': 'TextEdit', 'SLB__NPSN': 'TextEdit', 'SLB__Jns_P': 'TextEdit', 'SLB__Statu': 'TextEdit', 'SLB__Kode_': 'TextEdit', 'SLB__Alama': 'TextEdit', 'SLB__ID': 'TextEdit', 'SLB__RT': 'TextEdit', 'SLB__RW': 'TextEdit', 'SLB__Kelur': 'TextEdit', 'SLB__Kecam': 'TextEdit', 'SLB__Akred': 'TextEdit', 'SLB__SK_Ak': 'TextEdit', 'Koord_X': 'TextEdit', 'Koord_Y': 'TextEdit', });
lyr_SLB_NEGERI_6.set('fieldImages', {'SLB__Nama': 'TextEdit', 'SLB__NSS': 'TextEdit', 'SLB__NPSN': 'TextEdit', 'SLB__Jns_P': 'TextEdit', 'SLB__Statu': 'TextEdit', 'SLB__Kode_': 'TextEdit', 'SLB__Alama': 'TextEdit', 'SLB__ID': 'TextEdit', 'SLB__RT': 'TextEdit', 'SLB__RW': 'TextEdit', 'SLB__Kelur': 'TextEdit', 'SLB__Kecam': 'TextEdit', 'SLB__Akred': 'TextEdit', 'SLB__SK_Ak': 'TextEdit', 'Koord_X': 'TextEdit', 'Koord_Y': 'TextEdit', });
lyr_SMA_NEGERI_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'Koord_X': 'TextEdit', 'Koord_Y': 'TextEdit', 'FID_1': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'name_1': 'TextEdit', 'jenia': 'TextEdit', 'status': 'TextEdit', 'alamat': 'TextEdit', 'kecamatan': 'TextEdit', 'akreditasi': 'TextEdit', 'kelurahan': 'TextEdit', });
lyr_SMA_SWASTA2_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'Koord_X': 'TextEdit', 'Koord_Y': 'TextEdit', 'FID_1': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'name_1': 'TextEdit', 'jenia': 'TextEdit', 'status': 'TextEdit', 'alamat': 'TextEdit', 'kecamatan': 'TextEdit', 'akreditasi': 'TextEdit', 'kelurahan': 'TextEdit', });
lyr_SMP_NEGERI_9.set('fieldImages', {'akreditasi': 'TextEdit', 'Koord_X': 'TextEdit', 'Koord': 'Range', 'Koord_Y': 'TextEdit', 'FID_1': 'TextEdit', 'name': 'TextEdit', 'jenis': 'TextEdit', 'status': 'TextEdit', 'alamat': 'TextEdit', 'kelurahan': 'TextEdit', 'kecamatan': 'TextEdit', 'akredita_1': 'TextEdit', });
lyr_SMP_SWASTA_10.set('fieldImages', {'akreditasi': 'TextEdit', 'Koord_X': 'TextEdit', 'Koord': 'Range', 'Koord_Y': 'TextEdit', 'FID_1': 'TextEdit', 'name': 'TextEdit', 'jenis': 'TextEdit', 'status': 'TextEdit', 'alamat': 'TextEdit', 'kelurahan': 'TextEdit', 'kecamatan': 'TextEdit', 'akredita_1': 'TextEdit', });
lyr_KELURAHAN_POLY_2.set('fieldLabels', {'Id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', });
lyr_SD_NEGERI_3.set('fieldLabels', {'Nama': 'no label', 'NSS': 'no label', 'NPSN': 'no label', 'Jns_Pnddkn': 'no label', 'Status': 'no label', 'Kode_Wil': 'no label', 'Alamat': 'no label', 'F8': 'no label', 'RT': 'no label', 'RW': 'no label', 'Kelurahan': 'no label', 'Kecamatan': 'no label', 'Akreditasi': 'no label', 'SK_Akred': 'no label', 'Koord_X': 'no label', 'Kood_Y': 'no label', });
lyr_SD_SWASTA_4.set('fieldLabels', {'OBJECTID': 'no label', 'Nama': 'no label', 'NSS': 'no label', 'NPSN': 'no label', 'Jns_Pnddkn': 'no label', 'Status': 'no label', 'Kode_Wil': 'no label', 'Alamat': 'no label', 'F8': 'no label', 'RT': 'no label', 'RW': 'no label', 'Kelurahan': 'no label', 'Kecamatan': 'no label', 'Akreditasi': 'no label', 'SK_Akred': 'no label', 'Koord_X': 'no label', });
lyr_SLB_5.set('fieldLabels', {'SLB__Nama': 'no label', 'SLB__NSS': 'no label', 'SLB__NPSN': 'no label', 'SLB__Jns_P': 'no label', 'SLB__Statu': 'no label', 'SLB__Kode_': 'no label', 'SLB__Alama': 'no label', 'SLB__ID': 'no label', 'SLB__RT': 'no label', 'SLB__RW': 'no label', 'SLB__Kelur': 'no label', 'SLB__Kecam': 'no label', 'SLB__Akred': 'no label', 'SLB__SK_Ak': 'no label', 'Koord_X': 'no label', 'Koord_Y': 'no label', });
lyr_SLB_NEGERI_6.set('fieldLabels', {'SLB__Nama': 'no label', 'SLB__NSS': 'no label', 'SLB__NPSN': 'no label', 'SLB__Jns_P': 'no label', 'SLB__Statu': 'no label', 'SLB__Kode_': 'no label', 'SLB__Alama': 'no label', 'SLB__ID': 'no label', 'SLB__RT': 'no label', 'SLB__RW': 'no label', 'SLB__Kelur': 'no label', 'SLB__Kecam': 'no label', 'SLB__Akred': 'no label', 'SLB__SK_Ak': 'no label', 'Koord_X': 'no label', 'Koord_Y': 'no label', });
lyr_SMA_NEGERI_7.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'no label', 'Koord_X': 'no label', 'Koord_Y': 'no label', 'FID_1': 'no label', 'OBJECTID_1': 'no label', 'name_1': 'no label', 'jenia': 'no label', 'status': 'no label', 'alamat': 'no label', 'kecamatan': 'no label', 'akreditasi': 'no label', 'kelurahan': 'no label', });
lyr_SMA_SWASTA2_8.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'no label', 'Koord_X': 'no label', 'Koord_Y': 'no label', 'FID_1': 'no label', 'OBJECTID_1': 'no label', 'name_1': 'no label', 'jenia': 'no label', 'status': 'no label', 'alamat': 'no label', 'kecamatan': 'no label', 'akreditasi': 'no label', 'kelurahan': 'no label', });
lyr_SMP_NEGERI_9.set('fieldLabels', {'akreditasi': 'header label', 'Koord_X': 'header label', 'Koord': 'header label', 'Koord_Y': 'no label', 'FID_1': 'no label', 'name': 'no label', 'jenis': 'no label', 'status': 'no label', 'alamat': 'no label', 'kelurahan': 'no label', 'kecamatan': 'no label', 'akredita_1': 'no label', });
lyr_SMP_SWASTA_10.set('fieldLabels', {'akreditasi': 'no label', 'Koord_X': 'no label', 'Koord': 'no label', 'Koord_Y': 'no label', 'FID_1': 'no label', 'name': 'no label', 'jenis': 'no label', 'status': 'no label', 'alamat': 'no label', 'kelurahan': 'no label', 'kecamatan': 'no label', 'akredita_1': 'no label', });
lyr_SMP_SWASTA_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});