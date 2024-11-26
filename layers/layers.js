ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([33.545363, 1.101069, 37.064973, 2.676402]);
var wms_layers = [];


        var lyr_BingMapsSatelliteImagery_0 = new ol.layer.Tile({
            'title': 'Bing Maps Satellite Imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://t0.tiles.virtualearth.net/tiles/a{q}.jpeg?g=685&mkt=en-us&n=z'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SiyoiMurunydam_2 = new ol.format.GeoJSON();
var features_SiyoiMurunydam_2 = format_SiyoiMurunydam_2.readFeatures(json_SiyoiMurunydam_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SiyoiMurunydam_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiyoiMurunydam_2.addFeatures(features_SiyoiMurunydam_2);
var lyr_SiyoiMurunydam_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SiyoiMurunydam_2, 
                style: style_SiyoiMurunydam_2,
                popuplayertitle: "Siyoi-Muruny dam",
                interactive: true,
                title: '<img src="styles/legend/SiyoiMurunydam_2.png" /> Siyoi-Muruny dam'
            });
var format_WaterPressureTanks_3 = new ol.format.GeoJSON();
var features_WaterPressureTanks_3 = format_WaterPressureTanks_3.readFeatures(json_WaterPressureTanks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WaterPressureTanks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterPressureTanks_3.addFeatures(features_WaterPressureTanks_3);
var lyr_WaterPressureTanks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterPressureTanks_3, 
                style: style_WaterPressureTanks_3,
                popuplayertitle: "Water Pressure Tanks",
                interactive: true,
                title: '<img src="styles/legend/WaterPressureTanks_3.png" /> Water Pressure Tanks'
            });
var format_WaterReticulationsystem_4 = new ol.format.GeoJSON();
var features_WaterReticulationsystem_4 = format_WaterReticulationsystem_4.readFeatures(json_WaterReticulationsystem_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WaterReticulationsystem_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterReticulationsystem_4.addFeatures(features_WaterReticulationsystem_4);
var lyr_WaterReticulationsystem_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterReticulationsystem_4, 
                style: style_WaterReticulationsystem_4,
                popuplayertitle: "Water Reticulation system",
                interactive: true,
                title: '<img src="styles/legend/WaterReticulationsystem_4.png" /> Water Reticulation system'
            });
var format_ServiceArea_5 = new ol.format.GeoJSON();
var features_ServiceArea_5 = format_ServiceArea_5.readFeatures(json_ServiceArea_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ServiceArea_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_5.addFeatures(features_ServiceArea_5);
var lyr_ServiceArea_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_5, 
                style: style_ServiceArea_5,
                popuplayertitle: "Service Area",
                interactive: true,
                title: '<img src="styles/legend/ServiceArea_5.png" /> Service Area'
            });
var format_watertreatmentworks_6 = new ol.format.GeoJSON();
var features_watertreatmentworks_6 = format_watertreatmentworks_6.readFeatures(json_watertreatmentworks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_watertreatmentworks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_watertreatmentworks_6.addFeatures(features_watertreatmentworks_6);
var lyr_watertreatmentworks_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_watertreatmentworks_6, 
                style: style_watertreatmentworks_6,
                popuplayertitle: "water treatment works",
                interactive: true,
                title: '<img src="styles/legend/watertreatmentworks_6.png" /> water treatment works'
            });

        var lyr_GoogleSatelliteHybrid_7 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_urban_centres_8 = new ol.format.GeoJSON();
var features_urban_centres_8 = format_urban_centres_8.readFeatures(json_urban_centres_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_urban_centres_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_urban_centres_8.addFeatures(features_urban_centres_8);
var lyr_urban_centres_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_urban_centres_8, 
                style: style_urban_centres_8,
                popuplayertitle: "urban_centres",
                interactive: true,
    title: 'urban_centres<br />\
    <img src="styles/legend/urban_centres_8_0.png" /> Market Center<br />\
    <img src="styles/legend/urban_centres_8_1.png" /> Municipality<br />\
    <img src="styles/legend/urban_centres_8_2.png" /> Town<br />\
    <img src="styles/legend/urban_centres_8_3.png" /> <br />'
        });
var format_WP_KRB_Roads_9 = new ol.format.GeoJSON();
var features_WP_KRB_Roads_9 = format_WP_KRB_Roads_9.readFeatures(json_WP_KRB_Roads_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WP_KRB_Roads_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WP_KRB_Roads_9.addFeatures(features_WP_KRB_Roads_9);
var lyr_WP_KRB_Roads_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WP_KRB_Roads_9, 
                style: style_WP_KRB_Roads_9,
                popuplayertitle: "WP_KRB_Roads",
                interactive: true,
                title: '<img src="styles/legend/WP_KRB_Roads_9.png" /> WP_KRB_Roads'
            });
var format_County_Boundary_v2_10 = new ol.format.GeoJSON();
var features_County_Boundary_v2_10 = format_County_Boundary_v2_10.readFeatures(json_County_Boundary_v2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_County_Boundary_v2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_County_Boundary_v2_10.addFeatures(features_County_Boundary_v2_10);
var lyr_County_Boundary_v2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_County_Boundary_v2_10, 
                style: style_County_Boundary_v2_10,
                popuplayertitle: "County_Boundary_v2",
                interactive: true,
                title: '<img src="styles/legend/County_Boundary_v2_10.png" /> County_Boundary_v2'
            });
var format_securityfacilitiesdistribution_11 = new ol.format.GeoJSON();
var features_securityfacilitiesdistribution_11 = format_securityfacilitiesdistribution_11.readFeatures(json_securityfacilitiesdistribution_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_securityfacilitiesdistribution_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_securityfacilitiesdistribution_11.addFeatures(features_securityfacilitiesdistribution_11);
var lyr_securityfacilitiesdistribution_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_securityfacilitiesdistribution_11, 
                style: style_securityfacilitiesdistribution_11,
                popuplayertitle: "security facilities distribution",
                interactive: true,
    title: 'security facilities distribution<br />\
    <img src="styles/legend/securityfacilitiesdistribution_11_0.png" /> AP Camp<br />\
    <img src="styles/legend/securityfacilitiesdistribution_11_1.png" /> Police Post<br />\
    <img src="styles/legend/securityfacilitiesdistribution_11_2.png" /> Police Station<br />'
        });
var format_WaterInfrastructure_12 = new ol.format.GeoJSON();
var features_WaterInfrastructure_12 = format_WaterInfrastructure_12.readFeatures(json_WaterInfrastructure_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WaterInfrastructure_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterInfrastructure_12.addFeatures(features_WaterInfrastructure_12);
var lyr_WaterInfrastructure_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterInfrastructure_12, 
                style: style_WaterInfrastructure_12,
                popuplayertitle: "Water Infrastructure",
                interactive: true,
                title: '<img src="styles/legend/WaterInfrastructure_12.png" /> Water Infrastructure'
            });
var format_Administration_13 = new ol.format.GeoJSON();
var features_Administration_13 = format_Administration_13.readFeatures(json_Administration_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Administration_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administration_13.addFeatures(features_Administration_13);
var lyr_Administration_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administration_13, 
                style: style_Administration_13,
                popuplayertitle: "Administration",
                interactive: true,
                title: '<img src="styles/legend/Administration_13.png" /> Administration'
            });
var format_AdministrativeCentres_14 = new ol.format.GeoJSON();
var features_AdministrativeCentres_14 = format_AdministrativeCentres_14.readFeatures(json_AdministrativeCentres_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AdministrativeCentres_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrativeCentres_14.addFeatures(features_AdministrativeCentres_14);
var lyr_AdministrativeCentres_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrativeCentres_14, 
                style: style_AdministrativeCentres_14,
                popuplayertitle: "Administrative Centres",
                interactive: true,
                title: '<img src="styles/legend/AdministrativeCentres_14.png" /> Administrative Centres'
            });
var format_TouristSites_15 = new ol.format.GeoJSON();
var features_TouristSites_15 = format_TouristSites_15.readFeatures(json_TouristSites_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TouristSites_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TouristSites_15.addFeatures(features_TouristSites_15);
var lyr_TouristSites_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TouristSites_15, 
                style: style_TouristSites_15,
                popuplayertitle: "Tourist Sites",
                interactive: true,
                title: '<img src="styles/legend/TouristSites_15.png" /> Tourist Sites'
            });
var format_TouristAccomodationFacilities_16 = new ol.format.GeoJSON();
var features_TouristAccomodationFacilities_16 = format_TouristAccomodationFacilities_16.readFeatures(json_TouristAccomodationFacilities_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TouristAccomodationFacilities_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TouristAccomodationFacilities_16.addFeatures(features_TouristAccomodationFacilities_16);
var lyr_TouristAccomodationFacilities_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TouristAccomodationFacilities_16, 
                style: style_TouristAccomodationFacilities_16,
                popuplayertitle: "Tourist Accomodation Facilities",
                interactive: true,
                title: '<img src="styles/legend/TouristAccomodationFacilities_16.png" /> Tourist Accomodation Facilities'
            });

lyr_BingMapsSatelliteImagery_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_SiyoiMurunydam_2.setVisible(true);lyr_WaterPressureTanks_3.setVisible(true);lyr_WaterReticulationsystem_4.setVisible(true);lyr_ServiceArea_5.setVisible(true);lyr_watertreatmentworks_6.setVisible(true);lyr_GoogleSatelliteHybrid_7.setVisible(true);lyr_urban_centres_8.setVisible(true);lyr_WP_KRB_Roads_9.setVisible(true);lyr_County_Boundary_v2_10.setVisible(true);lyr_securityfacilitiesdistribution_11.setVisible(true);lyr_WaterInfrastructure_12.setVisible(true);lyr_Administration_13.setVisible(true);lyr_AdministrativeCentres_14.setVisible(true);lyr_TouristSites_15.setVisible(true);lyr_TouristAccomodationFacilities_16.setVisible(true);
var layersList = [lyr_BingMapsSatelliteImagery_0,lyr_GoogleSatelliteHybrid_1,lyr_SiyoiMurunydam_2,lyr_WaterPressureTanks_3,lyr_WaterReticulationsystem_4,lyr_ServiceArea_5,lyr_watertreatmentworks_6,lyr_GoogleSatelliteHybrid_7,lyr_urban_centres_8,lyr_WP_KRB_Roads_9,lyr_County_Boundary_v2_10,lyr_securityfacilitiesdistribution_11,lyr_WaterInfrastructure_12,lyr_Administration_13,lyr_AdministrativeCentres_14,lyr_TouristSites_15,lyr_TouristAccomodationFacilities_16];
lyr_SiyoiMurunydam_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Type': 'Type', 'Ward': 'Ward', 'Sub county': 'Sub county', });
lyr_WaterPressureTanks_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_WaterReticulationsystem_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Length': 'Length', 'Wayleave': 'Wayleave', });
lyr_ServiceArea_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_watertreatmentworks_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Acreage': 'Acreage', });
lyr_urban_centres_8.set('fieldAliases', {'TOWN_NAME': 'TOWN_NAME', 'TOWN_TYPE': 'TOWN_TYPE', 'KTOWNS_ID': 'KTOWNS_ID', 'MALES': 'MALES', 'FEMALES': 'FEMALES', 'POPULATION': 'POPULATION', });
lyr_WP_KRB_Roads_9.set('fieldAliases', {'RID': 'RID', 'RdName': 'RdName', 'SurfType': 'SurfType', 'SurfCond': 'SurfCond', 'Road_Usage': 'Road_Usage', 'ROADCLASS': 'ROADCLASS', 'OLD_CLASS': 'OLD_CLASS', });
lyr_County_Boundary_v2_10.set('fieldAliases', {'FID_County': 'FID_County', 'FIRST_COUN': 'FIRST_COUN', });
lyr_securityfacilitiesdistribution_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Rank': 'Rank', 'Sub county': 'Sub county', 'ward': 'ward', });
lyr_WaterInfrastructure_12.set('fieldAliases', {'name': 'name', 'Remarks': 'Remarks', 'Type': 'Type', 'Salinity': 'Salinity', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Funding': 'Funding', 'Depth (m)': 'Depth (m)', 'Drilling d': 'Drilling d', 'Safe yield': 'Safe yield', 'Energy Sou': 'Energy Sou', 'Source': 'Source', 'Storage Ta': 'Storage Ta', 'Metering': 'Metering', 'LOCALITY': 'LOCALITY', 'WARD': 'WARD', 'SUBCOUNTY': 'SUBCOUNTY', 'DRILLED': 'DRILLED', 'SUCCESSFUL': 'SUCCESSFUL', });
lyr_Administration_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_AdministrativeCentres_14.set('fieldAliases', {'CATEGORY': 'CATEGORY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Name': 'Name', 'Remarks': 'Remarks', '_REMARKS': '_REMARKS', });
lyr_TouristSites_15.set('fieldAliases', {'Name': 'Name', 'Category': 'Category', 'Remarks': 'Remarks', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source': 'Source', });
lyr_TouristAccomodationFacilities_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Category': 'Category', });
lyr_SiyoiMurunydam_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Ward': 'TextEdit', 'Sub county': 'TextEdit', });
lyr_WaterPressureTanks_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_WaterReticulationsystem_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Length': 'TextEdit', 'Wayleave': 'TextEdit', });
lyr_ServiceArea_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_watertreatmentworks_6.set('fieldImages', {'id': '', 'Name': '', 'Acreage': '', });
lyr_urban_centres_8.set('fieldImages', {'TOWN_NAME': 'TextEdit', 'TOWN_TYPE': 'TextEdit', 'KTOWNS_ID': 'TextEdit', 'MALES': 'TextEdit', 'FEMALES': 'TextEdit', 'POPULATION': 'TextEdit', });
lyr_WP_KRB_Roads_9.set('fieldImages', {'RID': 'TextEdit', 'RdName': 'TextEdit', 'SurfType': 'TextEdit', 'SurfCond': 'TextEdit', 'Road_Usage': 'TextEdit', 'ROADCLASS': 'TextEdit', 'OLD_CLASS': 'TextEdit', });
lyr_County_Boundary_v2_10.set('fieldImages', {'FID_County': '', 'FIRST_COUN': '', });
lyr_securityfacilitiesdistribution_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Rank': 'TextEdit', 'Sub county': 'TextEdit', 'ward': 'TextEdit', });
lyr_WaterInfrastructure_12.set('fieldImages', {'name': 'TextEdit', 'Remarks': 'TextEdit', 'Type': 'TextEdit', 'Salinity': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Funding': 'TextEdit', 'Depth (m)': 'TextEdit', 'Drilling d': 'TextEdit', 'Safe yield': 'TextEdit', 'Energy Sou': 'TextEdit', 'Source': 'TextEdit', 'Storage Ta': 'TextEdit', 'Metering': 'TextEdit', 'LOCALITY': 'TextEdit', 'WARD': 'TextEdit', 'SUBCOUNTY': 'TextEdit', 'DRILLED': 'TextEdit', 'SUCCESSFUL': 'TextEdit', });
lyr_Administration_13.set('fieldImages', {'id': '', 'Name': '', });
lyr_AdministrativeCentres_14.set('fieldImages', {'CATEGORY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Name': 'TextEdit', 'Remarks': 'TextEdit', '_REMARKS': 'TextEdit', });
lyr_TouristSites_15.set('fieldImages', {'Name': 'TextEdit', 'Category': 'TextEdit', 'Remarks': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source': 'TextEdit', });
lyr_TouristAccomodationFacilities_16.set('fieldImages', {'id': '', 'Name': '', 'Category': '', });
lyr_SiyoiMurunydam_2.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', 'Type': 'header label - visible with data', 'Ward': 'header label - visible with data', 'Sub county': 'header label - visible with data', });
lyr_WaterPressureTanks_3.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', });
lyr_WaterReticulationsystem_4.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', 'Length': 'header label - visible with data', 'Wayleave': 'header label - visible with data', });
lyr_ServiceArea_5.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', });
lyr_watertreatmentworks_6.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', 'Acreage': 'header label - visible with data', });
lyr_urban_centres_8.set('fieldLabels', {'TOWN_NAME': 'header label - visible with data', 'TOWN_TYPE': 'header label - visible with data', 'KTOWNS_ID': 'header label - visible with data', 'MALES': 'header label - visible with data', 'FEMALES': 'header label - visible with data', 'POPULATION': 'header label - visible with data', });
lyr_WP_KRB_Roads_9.set('fieldLabels', {'RID': 'header label - visible with data', 'RdName': 'header label - visible with data', 'SurfType': 'header label - visible with data', 'SurfCond': 'header label - visible with data', 'Road_Usage': 'header label - visible with data', 'ROADCLASS': 'header label - visible with data', 'OLD_CLASS': 'header label - visible with data', });
lyr_County_Boundary_v2_10.set('fieldLabels', {'FID_County': 'header label - visible with data', 'FIRST_COUN': 'header label - visible with data', });
lyr_securityfacilitiesdistribution_11.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', 'Rank': 'header label - visible with data', 'Sub county': 'header label - visible with data', 'ward': 'header label - visible with data', });
lyr_WaterInfrastructure_12.set('fieldLabels', {'name': 'header label - visible with data', 'Remarks': 'header label - visible with data', 'Type': 'header label - visible with data', 'Salinity': 'header label - visible with data', 'Latitude': 'header label - visible with data', 'Longitude': 'header label - visible with data', 'Status': 'header label - visible with data', 'Funding': 'header label - visible with data', 'Depth (m)': 'header label - visible with data', 'Drilling d': 'header label - visible with data', 'Safe yield': 'header label - visible with data', 'Energy Sou': 'header label - visible with data', 'Source': 'header label - visible with data', 'Storage Ta': 'header label - visible with data', 'Metering': 'header label - visible with data', 'LOCALITY': 'header label - visible with data', 'WARD': 'header label - visible with data', 'SUBCOUNTY': 'header label - visible with data', 'DRILLED': 'header label - visible with data', 'SUCCESSFUL': 'header label - visible with data', });
lyr_Administration_13.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', });
lyr_AdministrativeCentres_14.set('fieldLabels', {'CATEGORY': 'header label - visible with data', 'Latitude': 'header label - visible with data', 'Longitude': 'header label - visible with data', 'Name': 'header label - visible with data', 'Remarks': 'header label - visible with data', '_REMARKS': 'header label - visible with data', });
lyr_TouristSites_15.set('fieldLabels', {'Name': 'header label - visible with data', 'Category': 'header label - visible with data', 'Remarks': 'header label - visible with data', 'Latitude': 'header label - visible with data', 'Longitude': 'header label - visible with data', 'Source': 'header label - visible with data', });
lyr_TouristAccomodationFacilities_16.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', 'Category': 'header label - visible with data', });
lyr_TouristAccomodationFacilities_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});