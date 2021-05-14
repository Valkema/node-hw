import { GroupStud } from './../db/models';

export async function createGroupStud(req, res, next) {
  try {
    const created_group = await GroupStud.create(req.body);
    if (created_group) {
      return res.status(201).send(created_group);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function updateGroupStudByPk(req, res, next) {
  try {
    const [updateRowsCount, updateRows] = await GroupStud.update(req.body, {
      where: {
        id: req.params.groupId,
      },
      returning: true,
    });
    if (updateRowsCount) {
      return res.status(201).send(updateRows);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function getGroupStudByPk(req, res, next) {
  try {
    const find_group = await GroupStud.findByPk(req.params.groupId, {
        where: {
            id: req.params.groupId,
          },
    });
    if (find_group) {
      return res.status(201).send(find_group);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function deleteGroupStudByPk(req, res, next) {
  try {
    const find_group = await GroupStud.destroy({
      where: {
        id: req.params.groupId,
      },
    });
    if (find_group) {
      return res.status(201).send(find_group);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}