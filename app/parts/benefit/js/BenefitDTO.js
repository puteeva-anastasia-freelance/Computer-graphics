'use strict';

/**
 * Этот класс будет хранить в себе информацию о преимуществах
 */
class BenefitDTO {
	/**
	 * @param {number} id уникальный идентификатор преимущества
	 * @param {string} name название преимущества
	 * @param {string} description описание преимущества
	 * @param {string} image svg-картинка
	 */
	constructor(id, name, description, image) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.image = image;
	}
}