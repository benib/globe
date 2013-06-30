
// custom models via http://eviltrout.com/2013/03/23/ember-without-data.html

var defaultOnionooSummary = {
    a: [],
    f: '',
    n: 'Unnamed',
    r: undefined
};
var defaultOnionooDetails = {
    nickname: 'Unnamed',
    fingerprint: '',
    or_addresses: [],
    exit_addresses: [],
    dir_address: '',
    last_seen: '',
    last_changed_address_or_port: '',
    first_seen: '',
    running: undefined,
    flags: [],
    country: '',
    country_name: '',
    region_name: '',
    city_name: '',

    latitude: -1,
    longitude: -1,

    as_number: '',
    as_name: '',
    consensus_weight: -1,
    host_name: '',
    last_restarted: '',
    bandwidth_rate: -1,
    bandwidth_burst: -1,
    observed_bandwidth: -1,
    advertised_bandwidth: -1,
    exit_policy: [],
    exit_policy_summary: [],
    contact: '',
    platform: '',
    family: [],
    advertised_bandwidth_fraction: -1,
    consensus_weight_fraction: -1,
    guard_probability: -1,
    middle_probability: -1,
    exit_probability: -1
};

// TODO: put together
var defaultWeightHistory = {
    first: '1970-01-01 01:00:00',
    last: '1970-01-01 01:00:00',
    interval: 1,
    factor: 1,
    count: 0,
    values: []
}
var defaultOnionooWriteHistory = {
    first: '1970-01-01 01:00:00',
    last: '1970-01-01 01:00:00',
    interval: 1,
    factor: 1,
    count: 0,
    values: []
};
var defaultOnionooReadHistory = {
    first: '1970-01-01 01:00:00',
    last: '1970-01-01 01:00:00',
    interval: 1,
    factor: 1,
    count: 0,
    values: []
};