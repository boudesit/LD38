function UnityManager(game) {
	this.game = game;
	this.unitType = null;
	this.iscreate = false;
	this.unitBattle = null;
};

UnityManager.prototype.create = function create() {


};

UnityManager.prototype.update = function update() {

	if(this.unitType != null && this.iscreate === true) {

		this.unitBattle = new UnitBattle(this.game, this.unitType);
		this.unitBattle.create();
		this.iscreate = false;
	}
};

UnityManager.prototype.setUnitType = function setUnitType(unitType) {
	this.unitType = unitType;
};

UnityManager.prototype.isCreate = function isCreate(isCreate) {

	this.iscreate = isCreate;
};
