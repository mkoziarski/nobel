import { map, mapValues, pick } from 'lodash';

const resultFields = [
  'firstname',
  'surname',
  'gender',
  'Prize Category',
  'year',
  'photo_url',
];

const mapField = (name, value) => {
  if (name === 'photo_url') {
    return `http://nobel.divedeeper.io${value}`;
  }
  if (name === 'year') {
    return value.act[1];
  }
  return value;
};

const useWildcard = true;

export const getQueryUrl = (query) => {
  const queryParam = encodeURI(query) + (useWildcard ? '*' : '');
  return `http://nobel.divedeeper.io/twigkit/api/core/services/platform/search/platforms.workflow.laureates?q=${queryParam}`;
};

export const extractResults = (resObj) => (map(resObj.results, (result) => ({
  id: result.result.id,
  ...mapValues(pick(result.result.fields, resultFields), (field) => mapField(field.name, field.val[0]))
})));
