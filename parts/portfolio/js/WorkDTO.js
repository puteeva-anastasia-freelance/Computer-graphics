'use strict';

/**
 * Этот класс будет хранить в себе информацию о конкретной работе
 */
class WorkDTO {
	/**
	 * @param {number} id уникальный идентификатор каждой работы
	 * @param {string} name название работы
	 * @param {string} image название файла с картинкой
	 * @param {string} youtubeLink ссылка на ютуб
	 * @param {string} type тип работы (может быть: showreel, project)
	 */
	constructor(id, name, image, youtubeLink, type) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.youtubeLink = youtubeLink;
		this.type = type;
	}
}