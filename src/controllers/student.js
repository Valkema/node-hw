import { Student } from './../db/models';


export async function createStudent(req, res, next) {
  try {
    const created_student = await Student.create(req.body);
    if (created_student) {
        return res.status(201).send(created_student);
      }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function updateStudent(req, res, next) {
  try {
    const [updateRowsCount, updateRows] = await Student.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });
    if (updateRowsCount) {
      return res.status(201).send(updateRows[0]);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function getStudent(req, res, next) {
  try {
    const find_student = await Student.findByPk(req.params.id);
    if (find_student) {
      return res.status(201).send(find_student);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function deleteStudent(req, res, next) {
  try {
    const find_student = await Student.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (find_student) {
      return res.status(201).send(find_student);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}