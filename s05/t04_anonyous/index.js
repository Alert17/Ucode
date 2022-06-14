module.exports.getAnonymous = (name, alias, affiliation) => {
  let anonymous = class {
        constructor(name, alias, affiliation) {
            this.name = name;
            this.alias = alias;
            this.affiliation = affiliation;
        }
    }
    return new anonymous(name, alias, affiliation);
}
