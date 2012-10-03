$(function () {

    $('.filterGroup').click(function (eventObject) {

        $(this).next().toggle(300, 'linear', function () {});
    });
   
});

function RankingFilterProperty(min, max, displayText) {
    
    var self = this;    
    self.displayText = displayText;
    self.min = ko.observable(min);
    self.max = ko.observable(max);
}

function District(name, id){
    var self = this;
    self.name = name;
    self.id = id;
}

function FilterViewModel() {
    var self = this;
    self.textSearch = ko.observable("");
    self.availableDistricts = ko.observableArray(InitDistrictArray());
    self.filteredDistricts = ko.observableArray();

    self.ranking = ko.observableArray(InitRankingArray());

    self.districtInFilter = function (district) {
        return self.filteredDistricts.indexOf(district);
    }

    self.toggleDistrict = function (district) {
        if (self.filteredDistricts.indexOf(district) >= 0) {
            self.filteredDistricts.remove(district);
        }
        else {
            self.filteredDistricts.push(district);
        }
    }
}

ko.bindingHandlers.jqSliderLow = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        //initialize the control
        var options = allBindingsAccessor().jqOptions || {};
        $(element).slider(options);

        //handle the value changing in the UI
        ko.utils.registerEventHandler(element, "slidechange", function () {
            //would need to do some more work here, if you want to bind against non-observables
            var observable = valueAccessor();
            observable($(element).slider("values", 0));
        });

    },
    //handle the model value changing
    update: function (element, valueAccessor) { }
};

ko.bindingHandlers.jqSliderHigh = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        //initialize the control
        var options = allBindingsAccessor().jqOptions || {};
        $(element).slider(options);

        //handle the value changing in the UI
        ko.utils.registerEventHandler(element, "slidechange", function () {
            //would need to do some more work here, if you want to bind against non-observables
            var observable = valueAccessor();
            observable($(element).slider("values", 1));
        });

    },
    //handle the model value changing
    update: function (element, valueAccessor) { }
};

ko.applyBindings(new FilterViewModel());

function InitRankingArray() {
    return [
        new RankingFilterProperty(1, 5, 'Medelbetyg'),
        new RankingFilterProperty(1, 5, 'Omgivning'),
        new RankingFilterProperty(1, 5, 'Snabbhet greener'),
        new RankingFilterProperty(1, 5, 'Finish'),
        new RankingFilterProperty(1, 5, 'Träningsmöjligheter')
    ]
}

function InitDistrictArray(){
    return [
        new District('Blekinge GDF', 22),
        new District('Bohuslän-Dals GDF', 23),
        new District('Dalarnas GDF', 24),
        new District('Gotlands GDF', 25),
        new District('Gästrike-Hälsinges GDF', 26),
        new District('Göteborgs GDF', 27),
        new District('Hallands GDF', 28),
        new District('Jämtland-Härjedalens GDF', 29),
        new District('Medelpads GDF', 30),
        new District('Norr- & Västerbottens GDF', 31),
        new District('Skånes GDF', 32),
        new District('Smålands GDF', 33),
        new District('Stockholms GDF', 34),
        new District('Södermanlands GDF', 35),
        new District('Upplands GDF', 36),
        new District('Värmlands GDF', 37),
        new District('Västergötlands GDF', 38),
        new District('Västmanlands GDF', 39),
        new District('Örebro Läns GDF', 40),
        new District('Östergötlands GDF', 41),
        new District('Ångermanlands GDF', 42),
    ]
}