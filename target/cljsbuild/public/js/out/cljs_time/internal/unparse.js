// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_time.internal.unparse');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.internal.parse');
goog.require('goog.date');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.Interval');
cljs_time.internal.unparse.unparse_period = (function cljs_time$internal$unparse$unparse_period(s,d,num,min,max){
var n = cljs_time.internal.core.zero_pad.call(null,num,min);
var c = cljs.core.count.call(null,n);
var n__$1 = cljs.core.subs.call(null,n,(c - max));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n__$1)].join(''),d], null);
});
cljs_time.internal.unparse.unparse_millis = (function cljs_time$internal$unparse$unparse_millis(var_args){
var G__49911 = arguments.length;
switch (G__49911) {
case 1:
return cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_millis.call(null,min,min);
});

cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getMilliseconds(),min,max);
});
});

cljs_time.internal.unparse.unparse_millis.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_seconds = (function cljs_time$internal$unparse$unparse_seconds(var_args){
var G__49914 = arguments.length;
switch (G__49914) {
case 1:
return cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_seconds.call(null,min,min);
});

cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getSeconds(),min,max);
});
});

cljs_time.internal.unparse.unparse_seconds.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_minutes = (function cljs_time$internal$unparse$unparse_minutes(var_args){
var G__49917 = arguments.length;
switch (G__49917) {
case 1:
return cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_minutes.call(null,min,min);
});

cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getMinutes(),min,max);
});
});

cljs_time.internal.unparse.unparse_minutes.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_hours = (function cljs_time$internal$unparse$unparse_hours(var_args){
var G__49920 = arguments.length;
switch (G__49920) {
case 1:
return cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_hours.call(null,min,min);
});

cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var hr = cljs.core.mod.call(null,d.getHours(),(12));
var hours = (((hr === (0)))?(12):hr);
return cljs_time.internal.unparse.unparse_period.call(null,s,d,hours,min,max);
});
});

cljs_time.internal.unparse.unparse_hours.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_HOURS = (function cljs_time$internal$unparse$unparse_HOURS(var_args){
var G__49923 = arguments.length;
switch (G__49923) {
case 1:
return cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_HOURS.call(null,min,min);
});

cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getHours(),min,max);
});
});

cljs_time.internal.unparse.unparse_HOURS.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_day = (function cljs_time$internal$unparse$unparse_day(var_args){
var G__49926 = arguments.length;
switch (G__49926) {
case 1:
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_day.call(null,min,min);
});

cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getDate(),min,max);
});
});

cljs_time.internal.unparse.unparse_day.cljs$lang$maxFixedArity = 2;

/**
 * .getDay returns 0-6, shifts to 1-7
 */
cljs_time.internal.unparse.unparse_day_of_week = (function cljs_time$internal$unparse$unparse_day_of_week(var_args){
var G__49929 = arguments.length;
switch (G__49929) {
case 1:
return cljs_time.internal.unparse.unparse_day_of_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_day_of_week.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_day_of_week.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_day_of_week.call(null,min,min);
});

cljs_time.internal.unparse.unparse_day_of_week.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var raw_day_of_week = d.getDay();
var day_of_week = ((cljs.core._EQ_.call(null,raw_day_of_week,(0)))?(7):raw_day_of_week);
return cljs_time.internal.unparse.unparse_period.call(null,s,d,day_of_week,min,max);
});
});

cljs_time.internal.unparse.unparse_day_of_week.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_day_of_year = (function cljs_time$internal$unparse$unparse_day_of_year(var_args){
var G__49932 = arguments.length;
switch (G__49932) {
case 1:
return cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_day.call(null,min,min);
});

cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getDate(),min,max);
});
});

cljs_time.internal.unparse.unparse_day_of_year.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_month = (function cljs_time$internal$unparse$unparse_month(var_args){
var G__49935 = arguments.length;
switch (G__49935) {
case 1:
return cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_month.call(null,min,min);
});

cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,(d.getMonth() + (1)),min,max);
});
});

cljs_time.internal.unparse.unparse_month.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_year = (function cljs_time$internal$unparse$unparse_year(var_args){
var G__49938 = arguments.length;
switch (G__49938) {
case 1:
return cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_year.call(null,min,min);
});

cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period.call(null,s,d,d.getYear(),min,max);
});
});

cljs_time.internal.unparse.unparse_year.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_quoted = (function cljs_time$internal$unparse$unparse_quoted(quoted){
return (function (s,d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.str,s,quoted),d], null);
});
});
cljs_time.internal.unparse.unparse_period_name = (function cljs_time$internal$unparse$unparse_period_name(s,d,n,periods,short_QMARK_){
var periods__$1 = cljs.core.vec.call(null,(function (){var G__49941 = periods;
if(cljs.core.truth_(short_QMARK_)){
return cljs.core.map.call(null,((function (G__49941){
return (function (p1__49940_SHARP_){
return cljs.core.subs.call(null,p1__49940_SHARP_,(0),(3));
});})(G__49941))
,G__49941);
} else {
return G__49941;
}
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(periods__$1.call(null,n))].join(''),d], null);
});
cljs_time.internal.unparse.unparse_month_name = (function cljs_time$internal$unparse$unparse_month_name(short_QMARK_){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period_name.call(null,s,d,d.getMonth(),cljs_time.internal.core.months,short_QMARK_);
});
});
cljs_time.internal.unparse.unparse_day_name = (function cljs_time$internal$unparse$unparse_day_name(short_QMARK_){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period_name.call(null,s,d,d.getDay(),cljs_time.internal.core.days,short_QMARK_);
});
});
cljs_time.internal.unparse.unparse_weekyear = (function cljs_time$internal$unparse$unparse_weekyear(var_args){
var G__49943 = arguments.length;
switch (G__49943) {
case 1:
return cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_weekyear.call(null,min,min);
});

cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var year = d.getYear();
var month = d.getMonth();
var day = d.getDate();
return cljs_time.internal.unparse.unparse_period.call(null,s,d,cljs_time.internal.core.get_week_year.call(null,year,month,day),min,max);
});
});

cljs_time.internal.unparse.unparse_weekyear.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_weekyear_week = (function cljs_time$internal$unparse$unparse_weekyear_week(var_args){
var G__49946 = arguments.length;
switch (G__49946) {
case 1:
return cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_weekyear_week.call(null,min,min);
});

cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var year = d.getYear();
var month = d.getMonth();
var day = d.getDate();
return cljs_time.internal.unparse.unparse_period.call(null,s,d,goog.date.getWeekNumber(year,month,day),min,max);
});
});

cljs_time.internal.unparse.unparse_weekyear_week.cljs$lang$maxFixedArity = 2;

cljs_time.internal.unparse.unparse_meridiem = (function cljs_time$internal$unparse$unparse_meridiem(capitalize_QMARK_){
return (function (s,d){
var hours = d.getHours();
var meridiem = (cljs.core.truth_(capitalize_QMARK_)?(((hours < (12)))?"AM":"PM"):(((hours < (12)))?"am":"pm"));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(meridiem)].join(''),d], null);
});
});
cljs_time.internal.unparse.unparse_timezone = (function cljs_time$internal$unparse$unparse_timezone(){
return (function (s,d){
if((d instanceof goog.date.UtcDateTime)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getTimezoneOffsetString())].join(''),d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,d], null);
}
});
});
cljs_time.internal.unparse.unparse_ordinal_suffix = (function cljs_time$internal$unparse$unparse_ordinal_suffix(getter){
return (function (s,d){
var n = getter.call(null,d);
var o = (function (){var G__49948 = n;
switch (G__49948) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
case (21):
return "st";

break;
case (22):
return "nd";

break;
case (23):
return "rd";

break;
case (31):
return "st";

break;
default:
return "th";

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join(''),d], null);
});
});
cljs_time.internal.unparse.lookup = (function cljs_time$internal$unparse$lookup(p__49950){
var vec__49951 = p__49950;
var t = cljs.core.nth.call(null,vec__49951,(0),null);
var pattern = cljs.core.nth.call(null,vec__49951,(1),null);
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"token","token",-1211463215))){
var G__49954 = pattern;
switch (G__49954) {
case "S":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millis","millis",-1338288387),(1),(2)], null);

break;
case "SSS":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millis","millis",-1338288387),(3),(3)], null);

break;
case "s":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),(1),(2)], null);

break;
case "ss":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),(2),(2)], null);

break;
case "m":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394),(1),(2)], null);

break;
case "mm":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394),(2),(2)], null);

break;
case "h":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855),(1),(2)], null);

break;
case "hh":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855),(2),(2)], null);

break;
case "H":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"HOURS","HOURS",-1611068963),(1),(2)], null);

break;
case "HH":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"HOURS","HOURS",-1611068963),(2),(2)], null);

break;
case "d":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(1),(2)], null);

break;
case "dd":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(2),(2)], null);

break;
case "D":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(1),(3)], null);

break;
case "DD":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(2),(3)], null);

break;
case "DDD":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(3),(3)], null);

break;
case "M":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),(1),(2)], null);

break;
case "MM":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),(2),(2)], null);

break;
case "MMM":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-name","month-name",-605509534),true], null);

break;
case "MMMM":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-name","month-name",-605509534),false], null);

break;
case "y":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(1),(4)], null);

break;
case "yy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(2),(2)], null);

break;
case "yyyy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(4),(4)], null);

break;
case "Y":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(1),(4)], null);

break;
case "YY":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(2),(2)], null);

break;
case "YYYY":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(4),(4)], null);

break;
case "x":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),(1),(4)], null);

break;
case "xx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),(2),(2)], null);

break;
case "xxxx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),(4),(4)], null);

break;
case "w":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),(1),(2)], null);

break;
case "ww":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),(2),(2)], null);

break;
case "e":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),(1),(1)], null);

break;
case "E":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-name","day-name",1806125744),true], null);

break;
case "EEE":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-name","day-name",1806125744),true], null);

break;
case "EEEE":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-name","day-name",1806125744),false], null);

break;
case "a":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meridiem","meridiem",1668960617),false], null);

break;
case "A":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meridiem","meridiem",1668960617),true], null);

break;
case "Z":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null);

break;
case "ZZ":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null);

break;
case "o":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ordinal-suffix","ordinal-suffix",-1311843199)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49954)].join('')));

}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quoted","quoted",2117344952),pattern], null);
}
});
cljs_time.internal.unparse.lookup_getter = (function cljs_time$internal$unparse$lookup_getter(key){
var G__49964 = key;
var G__49964__$1 = (((G__49964 instanceof cljs.core.Keyword))?G__49964.fqn:null);
switch (G__49964__$1) {
case "millis":
return ((function (G__49964,G__49964__$1){
return (function (p1__49956_SHARP_){
return p1__49956_SHARP_.getMilliseconds();
});
;})(G__49964,G__49964__$1))

break;
case "seconds":
return ((function (G__49964,G__49964__$1){
return (function (p1__49957_SHARP_){
return p1__49957_SHARP_.getSeconds();
});
;})(G__49964,G__49964__$1))

break;
case "minutes":
return ((function (G__49964,G__49964__$1){
return (function (p1__49958_SHARP_){
return p1__49958_SHARP_.getMinutes();
});
;})(G__49964,G__49964__$1))

break;
case "hours":
return ((function (G__49964,G__49964__$1){
return (function (p1__49959_SHARP_){
return p1__49959_SHARP_.getHours();
});
;})(G__49964,G__49964__$1))

break;
case "HOURS":
return ((function (G__49964,G__49964__$1){
return (function (p1__49960_SHARP_){
return p1__49960_SHARP_.getHours();
});
;})(G__49964,G__49964__$1))

break;
case "day":
return ((function (G__49964,G__49964__$1){
return (function (p1__49961_SHARP_){
return p1__49961_SHARP_.getDate();
});
;})(G__49964,G__49964__$1))

break;
case "month":
return ((function (G__49964,G__49964__$1){
return (function (p1__49962_SHARP_){
return p1__49962_SHARP_.getMonth();
});
;})(G__49964,G__49964__$1))

break;
case "year":
return ((function (G__49964,G__49964__$1){
return (function (p1__49963_SHARP_){
return p1__49963_SHARP_.getYear();
});
;})(G__49964,G__49964__$1))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49964__$1)].join('')));

}
});
cljs_time.internal.unparse.lookup_fn = (function cljs_time$internal$unparse$lookup_fn(syntax_list,i,p__49966){
var vec__49967 = p__49966;
var seq__49968 = cljs.core.seq.call(null,vec__49967);
var first__49969 = cljs.core.first.call(null,seq__49968);
var seq__49968__$1 = cljs.core.next.call(null,seq__49968);
var key = first__49969;
var args = seq__49968__$1;
var G__49970 = key;
var G__49970__$1 = (((G__49970 instanceof cljs.core.Keyword))?G__49970.fqn:null);
switch (G__49970__$1) {
case "millis":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_millis,args);

break;
case "seconds":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_seconds,args);

break;
case "minutes":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_minutes,args);

break;
case "hours":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_hours,args);

break;
case "HOURS":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_HOURS,args);

break;
case "day":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_day,args);

break;
case "month":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_month,args);

break;
case "month-name":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_month_name,args);

break;
case "year":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_year,args);

break;
case "weekyear":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_weekyear,args);

break;
case "weekyear-week":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_weekyear_week,args);

break;
case "day-name":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_day_name,args);

break;
case "day-of-week":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_day_of_week,args);

break;
case "meridiem":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_meridiem,args);

break;
case "timezone":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_timezone,args);

break;
case "ordinal-suffix":
var vec__49971 = syntax_list.call(null,(i - (1)));
var k = cljs.core.nth.call(null,vec__49971,(0),null);
return cljs_time.internal.unparse.unparse_ordinal_suffix.call(null,cljs_time.internal.unparse.lookup_getter.call(null,k));

break;
case "quoted":
return cljs.core.apply.call(null,cljs_time.internal.unparse.unparse_quoted,args);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49970__$1)].join('')));

}
});
cljs_time.internal.unparse.unparse = (function cljs_time$internal$unparse$unparse(pattern,value){
var syn_list = cljs.core.mapv.call(null,cljs_time.internal.unparse.lookup,cljs_time.internal.parse.read_pattern.call(null,pattern));
var d = value;
var G__49978 = cljs.core.map_indexed.call(null,cljs.core.partial.call(null,cljs_time.internal.unparse.lookup_fn,syn_list),syn_list);
var vec__49979 = G__49978;
var seq__49980 = cljs.core.seq.call(null,vec__49979);
var first__49981 = cljs.core.first.call(null,seq__49980);
var seq__49980__$1 = cljs.core.next.call(null,seq__49980);
var unparser = first__49981;
var more = seq__49980__$1;
var s = "";
var d__$1 = d;
var G__49978__$1 = G__49978;
var s__$1 = s;
while(true){
var d__$2 = d__$1;
var vec__49982 = G__49978__$1;
var seq__49983 = cljs.core.seq.call(null,vec__49982);
var first__49984 = cljs.core.first.call(null,seq__49983);
var seq__49983__$1 = cljs.core.next.call(null,seq__49983);
var unparser__$1 = first__49984;
var more__$1 = seq__49983__$1;
var s__$2 = s__$1;
if((unparser__$1 == null)){
return s__$2;
} else {
var vec__49985 = unparser__$1.call(null,s__$2,d__$2);
var s__$3 = cljs.core.nth.call(null,vec__49985,(0),null);
var d__$3 = cljs.core.nth.call(null,vec__49985,(1),null);
var G__49988 = d__$3;
var G__49989 = more__$1;
var G__49990 = s__$3;
d__$1 = G__49988;
G__49978__$1 = G__49989;
s__$1 = G__49990;
continue;
}
break;
}
});

//# sourceMappingURL=unparse.js.map?rel=1536503774144
